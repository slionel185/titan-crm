import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import ContactModal from '@/components/ContactModal'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
        <ContactModal />
      </main>
  )
}

export default App