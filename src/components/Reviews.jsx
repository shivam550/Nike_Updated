import React from 'react'
import { reviews } from '../constants'
import { star } from '../assets/icons'
// import { customer1 } from '../assets/images'

const Reviews = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className=' flex flex-col justify-center items-center shadow-3xl p-8 rounded-[20px]'>
        
     <img src={imgURL}
     alt='customer'
     className='rounded-full object-cover w-[120px] h-[120px]'/>
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
       <img src={star} width={24} height={24}  className='object-contain m-0'/>
       <p className='info-text'>({rating})</p>
      </div>
      <h3 className='font-bold font-montserrat mt-6'>{customerName}</h3>

    </div>
  )
}

export default Reviews;