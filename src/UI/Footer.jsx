import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='ml-3 py-10 px-2 md:px-4 lg:px-6 bg-[#E7f5f5] h-[50%] text-black'>
        <div className='pb-3 text-white/60' onClick={() => scrollTo(0,0)}>
            <Logo />
        </div>

        <div className='flex flex-col space-y-8 md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]'>
            {/*---------Left Section-----------*/}

            <div className='bg-[#f3274c] px-2 lg:px-3 py-4 rounded text-white/80'>
                 <p className='w-full text-justify md:w-3/4 lg:w-full text-[15px] leading-6 '>Thank you for joining us on this journey to inspire, empower, and elevate your everyday glam.We are always here to ensure your beauty and your glow.</p>
                 <p className='w-full text-justify md:w-3/4 lg:w-full text-[15px] leading-6 '>“Feel free to express your true self with Glam by La Sauce. Your glam, your story.”</p>
               </div>


            {/*---------Center Section-----------*/}
              <div className='lg:ml-12 lg:pl-2'>
                <p className='font-bold'>QUICK LINKS</p>
                <p className='text-[15px] hover:text-black/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='/'>Home</Link></p>
                <p className=' text-[15px] hover:text-black/60 hover:font-bold'><Link to='about' onClick={()=> scrollTo(0,0)}>About</Link></p>
                <p className='text-[15px] hover:text-black/60 hover:font-bold'><Link to='services' onClick={()=> scrollTo(0,0)}>Menu</Link></p>
                <p className='text-[15px] hover:text-black/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='works'>Services</Link></p>
                <p className='text-[15px] hover:text-black/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='contact'>Contact</Link></p>

              </div>

            {/*---------Right Section-----------*/}
            <div className='space-y-1 text-[15px]'>
                <p className='font-bold'>CONTACT</p>
                <a href="https://wa.me/+2348030769110?text=Hi%20Bakehouse%20Food,%20I%E2%80%99interested%20in%20exploring%20your%20services!"
                target='_blank'>
                  <p>WhatsApp: +234-8030769110</p>
                </a>
                <a href="mailto:succychris6@gmail.com"
                   target='_blank'>
                  <p>Email: bakehousefoods.confectionery@gmail.com</p>
                </a>
                <a href="https://www.instagram.com/glamby_lasauce?igsh=NTIhYWJwZDN6dWIz&utm_-source=gr" target="_blank" rel="noopener noreferrer">
                  <p>Instagram: glamby_lasauce</p>
                </a>
                <a href="https://www.tiktok.com/@glambylasauce?_r=1&_t=ZS-92GWy4fPIxx" target="_blank" rel="noopener noreferrer">
                <p>TikTok: glambylasauce</p>
                </a>
                <p>Location: Onike Yaba, Lagos Nigeria.</p>

            </div>
        </div>
            <hr className='mt-2' />
        <p className="text-center pt-3 pb-[-12px] text-[12px]">Copyright &copy; Bakehouse Foods 2025</p>
    </footer>
  )
}
























