import React from 'react'

const Common_btn = ({ title, bgcolour, textcolour }) => {
  return (
    <button className={`font-semibold font-Poppins text-[16px] ${textcolour} py-3 px-[40px] ${bgcolour}`}>
      {title}
    </button>
  );
};


export default Common_btn