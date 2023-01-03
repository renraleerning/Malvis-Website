import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
// import { useAbout } from '@hooks/useAbout'
import { Element } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-10 text-center`}
`

// const ContentHead = styled.h1`
//   ${tw`text-3xl font-bold lg:text-4xl mb-7 text-[#3D3F3C]`}
// `

const Contentsub = styled.p`
  ${tw`text-[#232323] text-justify lg:text-base text-sm px-0`}
`

export const About: React.FC = () => {
  // const { dataAbout, isLoadingAbout } = useAbout(`about?populate=*`)

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Element name="about" className="bg-white element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <Content data-aos="fade">
            {/* <ContentHead>About Malvis</ContentHead> */}
            <Contentsub>
              The Firm consists of equipped prominent professionals with the experience and knowledge on handling various
              notable transactions in Indonesia, gained from having worked at some of the largest and renowned law firms. Our
              practices scope are Litigation and Corporate services which covering on all litigation fields (Criminal,
              Private, Tax), Manpower & Industrial Relations (Company Regulation, Working Agreement, Union, Termination),
              Family law (inheritance, Divorce, pre-nuptial agreement, etc) Corporate Commercial & Foreign Investment
              (Establishment, Restructuring, M&A, Liquidation), Business Transaction (Cooperation Agreement, Debt.
              Collection, Bakcruptcy, Private Investigator), and also Supporting Service (Translation, Interpretation, and
              Business Matching).
              {/* {!isLoadingAbout && dataAbout?.data?.attributes?.AboutText} */}
            </Contentsub>
          </Content>
        </Container>
      </Element>
    </>
  )
}
