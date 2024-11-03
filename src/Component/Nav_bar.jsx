import React from 'react'
import Container from "./Container"
import Flex from './Flex'
import Logo from '../assets/Logo.png'
const Nav_bar = () => {
  return (
    <section className='py-[24px] bg-red'>
    <Container>
     <Flex className={`items-center justify-between`}>
      {/* logo */}
     <div className='w-1/2'>
   <img src={Logo} alt="" />
     </div>
     {/* logo */}
     {/* nav iteam */}
     <Flex className={`items-center gap-[46px] w-1/2`}>
      <ul className='flex items-center gap-8'>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Home</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>About</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Services</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Gallery</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Blog</li>
      </ul>
      <button className='py-[14px] px-[30px] font-Poppins font-semibold text-[16px] text-text_white border-[2px] border-text_white hover:bg-semi_white duration-75'>CONTACT</button>
     </Flex>
     {/* nav iteam */}
     </Flex>
    </Container>

    </section>
  )
}

export default Nav_bar