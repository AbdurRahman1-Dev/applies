import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECREET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
