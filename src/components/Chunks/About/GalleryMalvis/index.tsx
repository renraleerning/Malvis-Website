import tw, { styled } from 'twin.macro'
import React, { Fragment } from 'react'
//import React, {  useRef } from 'react's
import { Container } from '@/components/Layouts'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

// import dataGallery from '@jsons/gallery.json'
// import GalleryCard from '@/components/Card/Gallery'

const ContentHead = styled.h1`
  ${tw`mb-5 text-3xl  text-center font-bold text-malvis lg:text-4xl`}
`

export const GalleryMalvis: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])

  // const sliderRef = useRef<any>(null)
  // const gotoNext = () => {
  //   sliderRef.current.slickNext()
  // }
  // const gotoPrev = () => {
  //   sliderRef.current.slickPrev()
  // }
  return (
    <Container tag={'div'} tw="px-5 md:px-14">
      <Fragment>
        <div tw="my-20">
          <div tw="md:my-auto grid place-content-center items-center" data-aos="fade">
            <ContentHead>ABOUT US</ContentHead>
            <p tw="text-[#2b2b2b] font-bold mb-5 text-center">Local Counsel, Globally Connected</p>
            <p tw="text-[#232323] mb-20 md:text-center text-justify text-sm" data-aos="fade">
              Malvis Attorneys at Law is founded because of the similarity of its founders’s background and college, with a
              wide range of its Founding Partners experiences, which are
              <b> Zubet Rizal.S.H., Reza Satria Kinayungan.S.H, CTL., Gading Yonggar Ditya.S.H.</b> Supported by strong
              analitycal of Lawyers, Paralegal, as well as Field Administration Staff who will be incharged as a solid team
              to provide many legal consultations to give the best service for valuable clients.
            </p>
          </div>
          <div tw="md:grid grid-cols-3 gap-4 hidden">
            <div tw="items-center mx-auto rounded-lg">
              <Image
                unoptimized={true}
                src={'/assets/images/9.jpg'}
                width={180}
                height={280}
                tw="rounded-lg object-contain bg-dark"
              />
            </div>
            <div tw="items-center my-auto mx-auto rounded-lg">
              <Image
                unoptimized={true}
                src={'/assets/images/7.jpg'}
                width={500}
                height={380}
                tw="rounded-lg object-contain bg-dark"
              />
            </div>
            <div tw="items-center mx-auto rounded-lg">
              <Image
                unoptimized={true}
                src={'/assets/images/10.jpg'}
                width={180}
                height={280}
                tw="rounded-lg object-contain bg-dark"
              />
            </div>
          </div>
          <div tw="grid grid-cols-2 my-5 gap-4 md:hidden">
            <div tw="items-center mx-auto">
              <Image
                unoptimized={true}
                src={'/assets/images/9.jpg'}
                width={180}
                height={280}
                tw="rounded-lg object-contain bg-dark"
              />
            </div>
            <div tw="items-center mx-auto rounded-lg">
              <Image
                unoptimized={true}
                src={'/assets/images/10.jpg'}
                width={180}
                height={280}
                tw="rounded-lg object-contain bg-dark"
              />
            </div>
            <div tw="items-center my-auto mx-auto grid col-span-2 rounded-lg">
              <Image
                unoptimized={true}
                src={'/assets/images/7.jpg'}
                width={500}
                height={380}
                tw="rounded-lg object-contain bg-dark"
              />
            </div>
          </div>
        </div>
      </Fragment>
    </Container>
  )
}
