import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

    // Multi-tenant identification placeholder
    // In a real multi-tenant app, you'd check the hostname/subdomain here
    const hostname = req.headers.get("host");
    const tenantId = hostname?.split(".")[0]; 

    // Role-based Access Control (RBAC)
    if (isAdminPage && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (!isAuth && (isDashboardPage || isAdminPage)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Attach tenant info to headers for downstream use if needed
    const response = NextResponse.next();
    if (tenantId) {
      response.headers.set("x-tenant-id", tenantId);
    }
    
    return response;
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-dev-313",
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
