import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('Auth: authorize called')
        
        if (!credentials?.email || !credentials?.password) {
          console.log('Auth: Missing credentials')
          return null
        }

        try {
          console.log('Auth: Looking up user:', credentials.email)
          
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string
            }
          })

          if (!user) {
            console.log('Auth: User not found')
            return null
          }

          console.log('Auth: Comparing password')
          const isPasswordValid = await bcrypt.compare(
            credentials.password as string,
            user.passwordHash
          )

          if (!isPasswordValid) {
            console.log('Auth: Invalid password')
            return null
          }

          console.log('Auth: Success for user:', user.email)
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          }
        } catch (error) {
          console.error('Auth: Error during authorization:', error)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
        session.user.id = token.id as string
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  trustHost: true,
  debug: true,
})
