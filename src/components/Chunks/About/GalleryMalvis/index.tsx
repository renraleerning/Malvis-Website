// import tw, { styled } from 'twin.macro'
import React, { Fragment } from 'react'
//import React, {  useRef } from 'react's
import { Container } from '@/components/Layouts'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

// import dataGallery from '@jsons/gallery.json'
// import GalleryCard from '@/components/Card/Gallery'

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
        <div tw="md:my-32">
          <div tw="md:my-auto grid sm:py-8 py-8 md:py-0 place-content-center items-center" data-aos="fade">
            <p tw="text-center text-malvisblue font-bold md:text-4xl text-xl mb-2  md:mb-4  ">ABOUT US</p>
            <p tw="text-[#232323] mb-2 md:mb-5 text-justify text-sm">
              Local Counsel, Globally Connected Malvis Attorneys at Law Law Office founded in 2022 with a wide range of its
              Founding Partners experiences, which are &nbsp;
              <b>Zubet Rizal.S.H., Reza Satria Kinayungan.S.H, CTL., Gading Yonggar Ditya.S.H.</b> Supported with strong
              analitycal of Lawyers, Paralegal, as well as Field Administration Staff who will be incharged as a solid team
              to provide many legal consultation to give the best service for valuable clients.
            </p>
          </div>
          <div tw="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-4">
            <div tw="items-center mx-auto">
              <Image
                unoptimized={true}
                src={'/assets/images/7.jpg'}
                layout="fixed"
                width={300}
                height={210}
                objectFit="contain"
                tw="rounded-lg bg-[#d9d9d9]"
              />
            </div>
            <div tw="items-center mx-auto rounded-lg md:hidden block lg:block">
              <Image
                unoptimized={true}
                src={'/assets/images/11.jpg'}
                layout="fixed"
                width={300}
                height={210}
                objectFit="contain"
                tw="rounded-lg bg-[#d9d9d9]"
              />
            </div>
            <div tw="items-center mx-auto rounded-lg">
              <Image
                unoptimized={true}
                src={'/assets/images/8.jpg'}
                layout="fixed"
                width={300}
                height={210}
                objectFit="contain"
                tw="rounded-lg bg-[#d9d9d9]"
              />
            </div>
          </div>
        </div>
      </Fragment>
    </Container>
  )
}
