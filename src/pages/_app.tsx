import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Condensed } from "@next/font/google"

const roboto_condensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["cyrillic"],
  variable: "--font-roboto_condensed"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto_condensed.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
