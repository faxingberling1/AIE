import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const fs = require('fs');
        const path = "C:\\Users\\Zah Computers\\Downloads\\AIE\\auth-logs.txt";
        const log = (msg: string) => {
          try {
            fs.appendFileSync(path, `${new Date().toISOString()} - ${msg}\n`);
          } catch (e) {}
        };
        
        log(`Authorize start: ${credentials?.email}`);
        
        if (!credentials?.email || !credentials?.password) {
          log("Fail: Missing fields");
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            log(`Fail: User not found ${credentials.email}`);
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password, user.password as string);
          log(`Password comparison: ${isValid}`);
          
          if (!isValid) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (err: any) {
          log(`Error: ${err.message}`);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-dev-313",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
