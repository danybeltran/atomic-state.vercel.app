import 'styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export default function App({ Component, pageProps }) {
  return (
    <main className={GeistSans.className}>
      <style suppressHydrationWarning>{`
      code {
        font-family: ${GeistMono.style.fontFamily} !important;
        font-weight: ${GeistMono.style.fontWeight} !important;
      }
      
      `}</style>
      <Component {...pageProps} />
    </main>
  )
}
