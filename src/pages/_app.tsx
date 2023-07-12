import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { trpc } from '@/util/trpc'
import ContactModal from '@/components/ContactModal'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
        <ContactModal />
      </main>
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)