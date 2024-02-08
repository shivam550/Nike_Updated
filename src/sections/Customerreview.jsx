import React from 'react'
import Reviews from '../components/Reviews';
import { reviews } from '../constants';

const Customerreview = () => {
  return (
    <section className='max-container '>
      <h3 className='font-palanquin text-center text-4xl font-bold '>
        What our 
        <span className='text-coral-red '> Customers </span>
         Say ?
      </h3>
      <p className=' text-center text-slate-gray mt-5 '> Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>

        <div className='mt-24 flex lg:flex-row flex-col flex-1 justify-evenly items-center gap-14  '>
          {
            reviews.map((review)=>(
              <Reviews 
              key={review}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
              />
            ))
          }
        </div>

    </section>
  )
}

export default Customerreview;