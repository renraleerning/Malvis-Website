import { HeroMalvis, PracticesMalvis, Ccmalvis, Desc } from '@/components/Chunks/Practices'
import { Footerv2 } from '@/components/Footerv2'
import Head from 'next/head'

const Practices = () => {
  return (
    <>
      <Head>
        <title>MALVIS | Practices Scope</title>
      </Head>
      <HeroMalvis open={false} />
      <PracticesMalvis />
      <Ccmalvis />
      <Desc />
      <Footerv2 open={false} />
    </>
  )
}

export default Practices
