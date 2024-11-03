import React from 'react'
import Container from './Container'
import Flex from './Flex';
import Common_btn from './Common_btn';
const Banner = () => {
  return (
    <section  className='py-[130px] lg:py-[258px] bg-banner bg-no-repeat bg-cover'>
    <Container>
        <Flex className={`flex-col items-center justify-center lg:items-start lg:justify-start gap-7`}>
          <h1 className='font-Poppins font-bold text-center lg:text-start text-[30px] md:text-[64px] text-text_white'>
          We exist since 1975 on the <br/>oil and gas industry.
          </h1>
          <Common_btn title={"LEARN MORE"} bgcolour={`red`} textcolour={`text_white`}/>
        </Flex>
       
    </Container>

    </section>
  )
}

export default Banner