import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "not set",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "is set" : "not set",
    DATABASE_URL: process.env.DATABASE_URL ? "is set" : "not set",
    NODE_ENV: process.env.NODE_ENV
  });
}
