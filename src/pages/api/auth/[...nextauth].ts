import type { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'

import NextAuth from 'next-auth/next'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/util/db'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'username' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                if(!credentials) return null

                const user = { id: '1', username: credentials.username, password: 'hashedvalue' }

                if(user) return user
                return null
            }
        })
    ]
}

export default NextAuth(authOptions)