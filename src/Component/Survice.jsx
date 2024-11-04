import React from 'react'
import Flex from './Flex'
import Common_btn from './Common_btn';
const Survice = () => {
  return (
    <section>
        <Flex className={`items-center flex-col gap-6 lg:gap-0 lg:flex-row`}>
       <Flex className={`w-full lg:w-1/2 items-center lg:items-end justify-end px-5 lg:px-[60px] flex-col`}>
        <h1 className='font-Poppins font-bold text-[50px] md:text-[64px] text-text_black'>
        Our Services
        </h1>
        <p className='w-full lg:w-[350px] font-Poppins font-medium text-[16px] text-text_black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
       </Flex>
       <div className='w-full bg-no-repeat bg-cover lg:w-1/2 bg-service_one pt-[148px] pb-[140px] px-5 lg:px-[80px]'>
        <h1 className='font-bold font-Poppins text-[28px] md:text-[36px] text-text_white mb-4'>Modern natural oil and gas refineries.</h1>
        <Common_btn title="Learn More" bgcolour="bg-red" textcolour="text-text_white" />
       </div>
        </Flex>
        <Flex className={`items-center flex-col gap-6 lg:gap-0 lg:flex-row mt-6 lg:mt-0`}>
        <div className='w-full bg-no-repeat bg-cover lg:w-1/2 bg-service_two pt-[148px] pb-[140px] px-5 lg:px-[80px]'>
        <h1 className='font-bold font-Poppins text-[28px] md:text-[36px] text-text_white mb-4'>Supply of national industries.</h1>
        <Common_btn title="Learn More" bgcolour="bg-red" textcolour="text-text_white" />
       </div>
       <div className='w-full bg-no-repeat bg-cover lg:w-1/2 bg-service_three pt-[148px] pb-[140px] px-5 lg:px-[80px]'>
        <h1 className='font-bold font-Poppins text-[28px] md:text-[36px] text-text_white mb-4'>National fuel distribution and supply.</h1>
        <Common_btn title="Learn More" bgcolour="bg-red" textcolour="text-text_white" />
       </div>
        </Flex>
    </section>
  )
}

export default Survice