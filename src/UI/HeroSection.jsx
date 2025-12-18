import React from 'react'
import hero2 from '../assets/hero2.jpg'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className='relative'>
        <img className='w-full h-[80svh] lg:h-[85dvh] object-cover' src={hero2} alt="" />
        <div className='animate-fade-up absolute text-center md:text-start top-[278px] sm:top-[270px] sm:left-[128px]'>
            <p className='text-white font-medium text-2xl md:text-4xl'>In the perfect space,</p> 
            <p className='text-white font-medium text-2xl md:text-4xl'>fantastic food</p>
            <p className='text-white/90 font-medium ml-2 mr-2 sm:ml-0 sm:mr-0'>Delicious food deserves a space that enhances it flavours,</p>
            <p className='text-white/90 font-medium ml-2 mr-2 sm:ml-0 sm:mr-0'>where every detail is crafted to delight and inspire.</p>
            <Link to='menu'>
                <button className='bg-[#f3274c] text-white rounded px-6 py-2 mt-4 cursor-pointer'>See Our Menus</button>
            </Link>
        </div>
    </div>
  )
}
