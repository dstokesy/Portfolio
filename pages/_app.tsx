import '../styles/global.scss'
import { AppProps } from 'next/app'
import { Cormorant_Infant, Dancing_Script } from '@next/font/google'

const cormorantInfant = Cormorant_Infant({
  weight: ['300', '400', '700'],
  variable: '--font-cormorant',
  subsets: ['latin'],
})

const dancingScript = Dancing_Script({
  weight: '400',
  variable: '--font-dancing',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${cormorantInfant.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}