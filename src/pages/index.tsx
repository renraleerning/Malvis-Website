import { Hero, About, QuotesMalvis } from '@/components/Chunks/Home'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>MALVIS — Attorneys at Law</title>
      </Head>
      <Hero />
      <About />
      <QuotesMalvis />
      <Footer open={false} />
    </>
  )
}

export default LandingPage
