import NextAuth, { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
// import GoogleProvider from 'next-auth/providers/google';
// import TwitterProvider from 'next-auth/providers/twitter';

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID ?? '',
      clientSecret: process.env.DISCORD_SECRET ?? '',
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID ?? '',
    //   clientSecret: process.env.GOOGLE_SECRET ?? '',
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID ?? '',
    //   clientSecret: process.env.TWITTER_SECRET ?? '',
    //   version: '2.0',
    // }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin';
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
