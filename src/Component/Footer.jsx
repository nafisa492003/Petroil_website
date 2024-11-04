import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import footer_logo from "../assets/footer_logo.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import img1 from '../assets/Cert1.png'
import img2 from '../assets/Cert2.png'
const Footer = () => {
  return (
    <section className="py-[150px] bg-[#1F1F1F]">
      <Container>
        <Flex className={`gap-[80px] lg:gap-[145px] flex-col lg:flex-row`}>
          {/* 1st part */}
          <div>
            <img className="mb-[32px]" src={footer_logo} alt="" />
            <Flex className={`items-center gap-1 text-text_white mb-3`}>
              <MdOutlineMarkEmailUnread className="text-[20px]" />
              <span className="font-Poppins font-normal text-[16px]">
                mail@yourcompany.com
              </span>
            </Flex>
            <Flex className={`items-center gap-1 text-text_white mb-3`}>
              <FiPhoneCall className="text-[20px]" />
              <span className="font-Poppins font-normal text-[16px]">
                +896 120 5889 (Toll free)
              </span>
            </Flex>
            <Flex className={`items-center gap-1 text-text_white mb-3`}>
              <IoLocation className="text-[20px]" />
              <span className="font-Poppins font-normal text-[16px]">
                101 Baker Street, New York, USA, 12345
              </span>
            </Flex>
            <Flex className={`items-center gap-4 mt-[36px]`}>
              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-text_white text-[16px] bg-red">
                <FaFacebookF />
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-text_white text-[16px] bg-red">
                <FaTwitter />
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-text_white text-[16px] bg-red">
                <GrLinkedinOption />
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-text_white text-[16px] bg-red">
                <FiInstagram />
              </div>
            </Flex>
          </div>
          {/* 1st part */}
          <Flex
            className={`gap-5 lg:gap-[50px] flex-col md:flex-row items-start`}
          >
            {/* 2nd part */}
           <Flex className={`items-center gap-[60px]`}>
            <div>
                <h2 className="text-text_white text-[24px] font-Poppins font-bold mb-5">Company</h2>
                <ul className="flex flex-col gap-4">
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Home</li>
                 <li className="text-[14px] text-text_white font-Poppins font-normal">About</li>
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Services</li>
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Gallery</li>
                </ul>
            </div>
            <div>
                <h2 className="text-text_white text-[24px] font-Poppins font-bold mb-5">Others</h2>
                <ul className="flex flex-col gap-4">
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Blog</li>
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Contact</li>
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Terms & Conditions</li>
                 <li className="text-[14px] text-text_white font-Poppins font-normal">Privacy Policy</li>
                </ul>
            </div>
           </Flex>
            {/* 2nd part */}
            {/* 3rd part */}
             <div>
             <h2 className="text-text_white text-[24px] font-Poppins font-bold mb-5">Certificate</h2>
             <Flex className={`items-center gap-1`}>
               <img src={img1} alt="" /> 
               <img src={img2} alt="" />
             </Flex>
             </div>
            {/* 3rd part */}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
