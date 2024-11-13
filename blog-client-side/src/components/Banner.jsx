import React from 'react'
// import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='px-4 py-12 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl pt-8 font-bold mb-7'>Welcome To Our Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore necessitatibus quis saepe odio. Sint, tempora sequi recusandae ab,
         itaque quasi minus similique accusamus corrupti eum sapiente labore quidem unde!</p>
         <div>
            <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Learn More <FaArrowRight 
            className='mt-1 ml-2' /> </Link>
         </div>
      </div>
    </div>
  )
}

export default Banner
