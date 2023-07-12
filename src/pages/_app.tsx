import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { trpc } from '@/util/trpc'
import ContactModal from '@/components/ContactModal'

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <ContactModal />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)