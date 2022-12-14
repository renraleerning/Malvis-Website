import { HeroMalvis, OurAttorneysMalvis, QuotesMalvis } from '@/components/Chunks/OurAttorneysMalvis'
import { Footerv2 } from '@/components/Footerv2'

const OurAttorneyMalvis = () => {
  return (
    <>
      <HeroMalvis open={false} />
      <QuotesMalvis />
      <OurAttorneysMalvis />
      <Footerv2 open={false} />
    </>
  )
}

export default OurAttorneyMalvis
