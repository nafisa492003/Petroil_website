import React from 'react'
import Container from "./Container";
import Flex from "./Flex";
import Common_btn from './Common_btn';
import { FaAngleRight } from "react-icons/fa6";
const Blog = () => {
  return (
    <section className='py-[120px] bg-[#F0F0F0]'>
   <Container>
    <Flex className={`items-center gap-5 lg:gap-[60px] flex-col lg:flex-row`}>
    <div className='bg-no-repeat bg-cover bg-blog_one pt-[75px] pb-[55px] px-4 md:px-[40px] w-full md:w-[340px]'>
    <h1 className='font-Poppins font-bold text-[24px] text-text_white w-full md:w-[200px] mb-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
    <Common_btn title="Learn More" bgcolour="bg-semi_white" textcolour="text-text_white" />
    </div>
    <div className='bg-no-repeat bg-cover bg-blog_two pt-[75px] pb-[55px] px-4 md:px-[40px] w-full md:w-[340px]'>
    <h1 className='font-Poppins font-bold text-[24px] text-text_white w-full md:w-[200px] mb-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
    <Common_btn title="Learn More" bgcolour="bg-semi_white" textcolour="text-text_white" />
    </div>
    <div className='bg-no-repeat bg-cover bg-blog_three pt-[75px] pb-[55px] px-4 md:px-[40px] w-full md:w-[340px]'>
    <h1 className='font-Poppins font-bold text-[24px] text-text_white w-full md:w-[200px] mb-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
    <Common_btn title="Learn More" bgcolour="bg-semi_white" textcolour="text-text_white" />
    </div>
    </Flex>
    <Flex className={`items-center justify-end gap-2 mt-7`}>
    <h5 className='font-Poppins font-bold text-[16px] text-text_black'>MORE FROM THE BLLOG</h5>
    <FaAngleRight className='text-[26px] text-text_black' />
    </Flex>
   </Container>
    </section>
  )
}

export default Blog