import React from 'react'
import hero2 from '../assets/hero2.jpg'

export default function HeroSection() {
  return (
    <div className='relative w-full'>
        <img className='w-full h-[80vh] md:h-[85vh] object-cover' src={hero2} alt="" />
        <div className='absolute text-center  md:text-start top-[278px] md:top-[270px] md:left-[128px]'>
            <p className='text-white font-medium text-4xl'>In the perfect space,</p> 
            <p className='text-4xl text-white font-medium'>fantastic food</p>
            <p className='text-white/90 font-medium'>Fantastic food deserves a space that enhances it flavours,</p>
            <p className='text-white/90 font-medium'>where every detail is crafted to delight and inspire.</p>
            <button className='bg-[#f3274c] text-white rounded px-6 py-2 mt-4'>See Our Menus</button>
        </div>
    </div>
  )
}
