import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Common_btn from "./Common_btn";

const Learn_more = () => {
  return (
    <section className="py-20 lg:py-[136px] bg-[#F0F0F0]">
      <Container>
        <Flex className={`items-center flex-col md:flex-row`}>
          <div className="w-full md:w-[414px] py-[80px] bg-red px-4 md:px-[74px]">
            <h1 className="font-bold font-Poppins text-[36px] text-text_white w-[262px]">
              Learn more about our company
            </h1>
          </div>
          <div className="bg-learn_more py-[138px]  bg-no-repeat bg-cover w-full flex items-center justify-center">
          <Common_btn title="Learn More" bgcolour="bg-[#FFFFFF]" textcolour="text-[#F40404]" />

          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Learn_more;
