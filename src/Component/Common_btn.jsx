import React from 'react'

const Common_btn = ({title, bgcolour ,textcolour}) => {
  return (
    <button className={`font-semibold font-Poppins text-[16px] text-${textcolour} py-3 px-[40px] bg-${bgcolour}`}>
       {title}
    </button>
  )
}

export default Common_btn