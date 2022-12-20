import { HeroMalvis, OurAttorneysMalvis } from '@/components/Chunks/OurAttorneysMalvis'
import { Footerv2 } from '@/components/Footerv2'
import Head from 'next/head'

const OurAttorneyMalvis = () => {
  return (
    <>
      <Head>
        <title>MALVIS — Our Attorneys</title>
      </Head>
      <HeroMalvis open={false} />
      <OurAttorneysMalvis />
      <Footerv2 open={false} />
    </>
  )
}

export default OurAttorneyMalvis
