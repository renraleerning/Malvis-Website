import { HeroMalvis, ProfileMalvis, ProfileMalvis1, ProfileMalvis2 } from '@/components/Chunks/Profile'
import { Footerv2 } from '@/components/Footerv2'
import Head from 'next/head'

const Profile = () => {
  return (
    <>
      <Head>
        <title>MALVIS — Profile</title>
      </Head>
      <HeroMalvis open={false} />
      <ProfileMalvis />
      <ProfileMalvis1 />
      <ProfileMalvis2 />
      <Footerv2 open={false} />
    </>
  )
}

export default Profile
