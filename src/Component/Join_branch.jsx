import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Join_branch = () => {
  return (
    <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0560230180527!2d90.40278852479072!3d23.709693340338927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91604e815ff%3A0x68dcfbc522139b62!2sGol%20Talab!5e0!3m2!1sen!2sbd!4v1730740835434!5m2!1sen!2sbd" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='py-[46px] bg-red'>
            <Container>
          <Flex className={`items-center gap-4 lg:gap-10 flex-col md:flex-row`}> 
           <h1 className='font-Poppins font-bold text-[36px] text-text_white'>
           Want to join as member branch in your area?
           </h1>
           <button className='font-Poppins font-semibold text-[16px] text-text_white px-[30px] py-[14px] border border-white'>CONTACT</button>
          </Flex>
            </Container>
        </div>
        <div className='w-full h-1 bg-border_Yellow'></div>
    </section>
  )
}

export default Join_branch