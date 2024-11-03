import React, { useState } from 'react'
import Container from "./Container"
import Flex from './Flex'
import Logo from '../assets/Logo.png'
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
const Nav_bar = () => {
  const [nav , setNav] = useState(false)
  return (
    <section className='py-[24px] bg-red relative'>
    <Container>
     <Flex className={`items-center justify-between`}>
      {/* logo */}
   <img src={Logo} alt="" />
     {/* logo */}
     {/* menu bar  */}
     <HiMiniAdjustmentsHorizontal onClick={()=>setNav(!nav)} className='text-text_white text-[36px] md:hidden' />
      {/* menu iteam */}
      {nav && (
        <div className='w-full  bg-orange-500 p-5 absolute top-[92px] left-0'>
        <ul className='flex flex-col gap-5'>
        <li className='font-semibold font-Poppins text-[24px] text-text_white'>Home</li>
        <li className='font-semibold font-Poppins text-[24px] text-text_white'>About</li>
        <li className='font-semibold font-Poppins text-[24px] text-text_white'>Services</li>
        <li className='font-semibold font-Poppins text-[24px] text-text_white'>Gallery</li>
        <li className='font-semibold font-Poppins text-[24px] text-text_white'>Blog</li>
        </ul>
        <button className='py-[14px] px-6 font-Poppins font-semibold text-[16px] text-text_white border-[2px] border-text_white hover:bg-semi_white duration-75 mt-5'>CONTACT</button>
        </div>
      )}
       {/* menu iteam */}
      {/* menu bar  */}
     {/* nav iteam */}
     <Flex className={`items-center gap-8 lg:gap-[46px] hidden md:flex`}>
      <ul className='flex items-center gap-4 lg:gap-8'>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Home</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>About</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Services</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Gallery</li>
        <li className='font-semibold font-Poppins text-[16px] text-text_white'>Blog</li>
      </ul>
      <button className='py-[14px] px-6 lg:px-[30px] font-Poppins font-semibold text-[16px] text-text_white border-[2px] border-text_white hover:bg-semi_white duration-75'>CONTACT</button>
     </Flex>
     {/* nav iteam */}
     </Flex>
    </Container>
    </section>
  )
}

export default Nav_bar