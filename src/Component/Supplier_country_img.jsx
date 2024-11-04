import React from 'react'
import Flex from './Flex'
import img_one from '../assets/supplier_country_1.png'
import img_two from '../assets/supplier_country_2.png'
import img_three from '../assets/supplier_country_3.png'
import img_four from '../assets/supplier_country_4.png'
const Supplier_country_img = () => {
  return (
    <Flex className={`items-center gap-5 mt-[100px] flex-col lg:flex-row`}>
    <img src={img_one} alt="" />
    <img src={img_two} alt="" />
    <img src={img_three} alt="" />
    <img src={img_four} alt="" />

    </Flex>
  )
}

export default Supplier_country_img
