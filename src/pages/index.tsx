import { Hero, About, QuotesMalvis } from '@/components/Chunks/Home'
import { Footer } from '@/components/Footer'
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <QuotesMalvis />
      <Footer open={false} />
    </>
  )
}

export default LandingPage
