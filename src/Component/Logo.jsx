import React from 'react'
import Container from "./Container";
import Flex from "./Flex";
import logo1 from '../assets/Logo1.png'
import logo2 from '../assets/Logo2.png'
import logo3 from '../assets/Logo3.png'
import logo4 from '../assets/Logo4.png'
const Logo = () => {
  return (
    <section className='py-[116px]'>
    <Container>
        <Flex className={`items-center gap-6 flex-col lg:flex-row`}>
       <img src={logo1} alt="" />
       <img src={logo2} alt="" />
       <img src={logo3} alt="" />
       <img src={logo4} alt="" />
        </Flex>
    </Container>
    </section>
  )
}

export default Logo