import { HeroMalvis, GalleryMalvis } from '@/components/Chunks/About'
import { Footerv2 } from '@/components/Footerv2'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>MALVIS | About</title>
      </Head>
      <HeroMalvis open={false} />
      <GalleryMalvis />
      <Footerv2 open={false} />
    </>
  )
}

export default About
