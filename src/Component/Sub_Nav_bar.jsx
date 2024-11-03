import React from 'react'
import Container from './Container'
import Flex from "./Flex"
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
const Sub_Nav_bar = () => {
  return (
    <section className='bg-[#282828] hidden md:block'>
        <Container>
          <Flex className={`items-center justify-between py-4`}>
            {/* contact part */}
          <Flex className={`items-center gap-5`}>
            <Flex className={`items-center gap-2 text-text_white`}>
            <IoMailUnreadOutline  className='text-[20px]'/>
            <span className='font-normal font-Poppins text-[12px]'>mail@yourcompany.com</span>
              </Flex> 
             <div className='w-[2px] rounded h-4 bg-[#5C6A92]'></div>  
             <Flex className={`items-center gap-2 text-text_white`}>
             <FiPhoneCall className='text-[20px]'/>
            <span className='font-normal font-Poppins text-[12px]'>+896 120 5889 (Toll free)</span>
              </Flex>
          </Flex>
           {/* contact part */}
           {/* social media icon part */}
          <Flex className={`items-center gap-6 text-text_white`}>
          <FaFacebookF className='text-[16px]'/>
          <FaTwitter className='text-[16px]'/>
          <FaLinkedin className='text-[16px]'/>
          <SiInstagram className='text-[16px]'/>
          </Flex>
           {/* social media icon part */}
          </Flex>
        </Container>
        <div className='w-full h-[5px] bg-border_Yellow hidden md:block'></div>
    </section>
  )
}

export default Sub_Nav_bar