import tw, { styled } from 'twin.macro'
import { FC, useEffect } from 'react'

const ContentQuote = styled.div`
  ${tw`flex w-full h-[170px] md:h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-malvisblue hover:bg-opacity-30 duration-200 bg-[#d9d9d9] rounded-xl place-items-center`}
`
const Title = styled.div`
  ${tw`flex-1 px-10 text-base font-bold text-left text-center text-gray-900 capitalize md:text-lg`}
`
const SubTitle = styled.div`
  ${tw`mx-12 mt-3 text-sm font-bold text-white rounded-lg md:text-sm bg-malvis`}
`

interface QuoteProps {
  quote: string
  by: string
}

const Quote: FC<QuoteProps> = ({ quote, by }) => {
  useEffect(() => {
    const handleResize = () => {}
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <ContentQuote>
      <Title>
        "{quote}"<SubTitle>{by}</SubTitle>
      </Title>
    </ContentQuote>
  )
}

export default Quote
