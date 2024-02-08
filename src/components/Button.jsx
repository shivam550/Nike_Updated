import React from 'react'
import { arrowRight } from '../assets/icons'

function Button({label , iconUrl}) {
  return (
    <button className=' flex 
    justify-center 
    items-center 
    gap-2 
    px-7 
    py-4 
    border 
    font-montserrat 
    text-lg 
    leading-none
    bg-coral-red text-white border-coral-red rounded-full'
    >
        {label}
      <img  src={arrowRight} alt='hero-right-icon' className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button