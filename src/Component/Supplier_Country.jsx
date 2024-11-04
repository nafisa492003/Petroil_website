import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Supplier_country_img from "./Supplier_country_img";
const Supplier_Country = () => {
  return (
    <section className="py-[80px] bg-[#E5E5E5]">
      <Container>
        {/* contenct */}
        <Flex className={`items-center justify-between flex-col lg:flex-row`}>
          <h1 className="w-full lg:w-[290px] font-Poppins font-bold text-[34px] md:text-[48px] text-text_black mb-5 lg:mb-0 text-center lg:text-start">
            The biggest supplier on the country
          </h1>
          <p className="w-full md:w-[560px] font-Poppins font-normal text-text_black text-[16px] text-center lg:text-start">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </Flex>
        {/* contenct */}
      </Container>
      {/* img part */}
      <Supplier_country_img/>
        {/* img part */}
    </section>
  );
};

export default Supplier_Country;
