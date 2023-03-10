import { Fragment } from 'react'
import { Element } from 'react-scroll'
import dataQuote from '@jsons/quote.json'
import QuoteCard from '@/components/Card/Quote'
import { Container } from '@/components/Layouts'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const QuotesMalvis: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])
  return (
    <>
      <Element name="quote" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <div
            data-aos="fade"
            tw="mb-10  mx-auto  w-full grid items-center justify-center grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 place-content-center">
            {dataQuote.map((data: any, i: number) => (
              <Fragment key={i} tw="">
                <QuoteCard key={i} quote={data?.quote} by={data?.by} />
              </Fragment>
            ))}
          </div>
        </Container>
      </Element>
    </>
  )
}
