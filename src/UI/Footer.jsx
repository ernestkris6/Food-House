import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#E7f5f5] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Logo */}
        <div
          className="mb-10 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <Logo />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* About */}
          <div className="bg-[#f3274c] rounded-lg p-5 text-white/90 space-y-3">
            <p className="text-sm leading-6">
              Thank you for joining us on this journey to inspire, empower,
              and elevate your everyday glam. We’re always here to ensure
              your beauty shines.
            </p>
            <p className="text-sm italic">
              “Feel free to express your true self with Glam by La Sauce.
              Your glam, your story.”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-black/60">Home</Link></li>
              <li><Link to="/about" className="hover:text-black/60">About</Link></li>
              <li><Link to="/services" className="hover:text-black/60">Menu</Link></li>
              <li><Link to="/works" className="hover:text-black/60">Services</Link></li>
              <li><Link to="/contact" className="hover:text-black/60">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/+2348030769110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black/60"
                >
                  WhatsApp: +234 803 076 9110
                </a>
              </li>
              <li>
                <a
                  href="mailto:bakehousefoods.confectionery@gmail.com"
                  className="hover:text-black/60"
                >
                  Email: bakehousefoods.confectionery@gmail.com
                </a>
              </li>
              <li>Location: Bodija, Ibadan.</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.instagram.com/glamby_lasauce"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-8 border-black/20" />

        {/* Copyright */}
        <p className="text-center text-xs">
          © {new Date().getFullYear()} Bakehouse Foods. All rights reserved.
        </p>
      </div>
    </footer>
  );
}











// import React from "react";
// import Logo from "./Logo";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#E7f5f5] text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

//         {/* Logo */}
//         <div
//           className="mb-10 cursor-pointer"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <Logo />
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//           {/* Left / About */}
//           <div className="bg-[#f3274c] rounded-lg p-5 text-white/90 space-y-3">
//             <p className="text-sm leading-6">
//               Thank you for joining us on this journey to inspire, empower,
//               and elevate your everyday glam. We’re always here to ensure
//               your beauty shines.
//             </p>
//             <p className="text-sm italic">
//               “Feel free to express your true self with Glam by La Sauce.
//               Your glam, your story.”
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4">QUICK LINKS</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/" className="hover:text-black/60">Home</Link></li>
//               <li><Link to="/about" className="hover:text-black/60">About</Link></li>
//               <li><Link to="/services" className="hover:text-black/60">Menu</Link></li>
//               <li><Link to="/works" className="hover:text-black/60">Services</Link></li>
//               <li><Link to="/contact" className="hover:text-black/60">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-4">CONTACT</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="https://wa.me/+2348030769110"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-black/60"
//                 >
//                   WhatsApp: +234 803 076 9110
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="mailto:bakehousefoods.confectionery@gmail.com"
//                   className="hover:text-black/60"
//                 >
//                   Email: bakehousefoods.confectionery@gmail.com
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.instagram.com/glamby_lasauce"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-black/60"
//                 >
//                   Instagram: glamby_lasauce
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.tiktok.com/@glambylasauce"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-black/60"
//                 >
//                   TikTok: glambylasauce
//                 </a>
//               </li>
//               <li>Location: Onike, Yaba, Lagos</li>
//             </ul>
//           </div>

//         </div>

//         {/* Divider */}
//         <hr className="my-8 border-black/20" />

//         {/* Copyright */}
//         <p className="text-center text-xs">
//           © {new Date().getFullYear()} Bakehouse Foods. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

























// import React from 'react'
// import Logo from './Logo'
// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <footer className='py-10 px-2 md:px-4 lg:px-6 bg-[#E7f5f5] h-[50%] text-black'>
//         <div className='pb-3 text-white/60' onClick={() => scrollTo(0,0)}>
//             <Logo />
//         </div>

//         <div className='flex flex-col space-y-8 md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]'>
//             {/*---------Left Section-----------*/}

//             <div className='bg-[#f3274c] px-2 lg:px-3 py-4 rounded text-white/80'>
//                  <p className='w-full text-justify md:w-3/4 lg:w-full text-[15px] leading-6 '>Thank you for joining us on this journey to inspire, empower, and elevate your everyday glam.We are always here to ensure your beauty and your glow.</p>
//                  <p className='w-full text-justify md:w-3/4 lg:w-full text-[15px] leading-6 '>“Feel free to express your true self with Glam by La Sauce. Your glam, your story.”</p>
//                </div>


//             {/*---------Center Section-----------*/}
//               <div className='lg:ml-12 lg:pl-2'>
//                 <p className='font-bold'>QUICK LINKS</p>
//                 <p className='text-[15px] hover:text-black/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='/'>Home</Link></p>
//                 <p className=' text-[15px] hover:text-black/60 hover:font-bold'><Link to='about' onClick={()=> scrollTo(0,0)}>About</Link></p>
//                 <p className='text-[15px] hover:text-black/60 hover:font-bold'><Link to='services' onClick={()=> scrollTo(0,0)}>Menu</Link></p>
//                 <p className='text-[15px] hover:text-black/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='works'>Services</Link></p>
//                 <p className='text-[15px] hover:text-black/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='contact'>Contact</Link></p>

//               </div>

//             {/*---------Right Section-----------*/}
//             <div className='space-y-1 text-[15px]'>
//                 <p className='font-bold'>CONTACT</p>
//                 <a href="https://wa.me/+2348030769110?text=Hi%20Bakehouse%20Food,%20I%E2%80%99interested%20in%20exploring%20your%20services!"
//                 target='_blank'>
//                   <p>WhatsApp: +234-8030769110</p>
//                 </a>
//                 <a href="mailto:succychris6@gmail.com"
//                    target='_blank'>
//                   <p>Email: bakehousefoods.confectionery@gmail.com</p>
//                 </a>
//                 <a href="https://www.instagram.com/glamby_lasauce?igsh=NTIhYWJwZDN6dWIz&utm_-source=gr" target="_blank" rel="noopener noreferrer">
//                   <p>Instagram: glamby_lasauce</p>
//                 </a>
//                 <a href="https://www.tiktok.com/@glambylasauce?_r=1&_t=ZS-92GWy4fPIxx" target="_blank" rel="noopener noreferrer">
//                 <p>TikTok: glambylasauce</p>
//                 </a>
//                 <p>Location: Onike Yaba, Lagos Nigeria.</p>

//             </div>
//         </div>
//             <hr className='mt-2 text-amber-500' />
//         <p className="text-center pt-3 pb-[-12px] text-[12px]">Copyright &copy; Bakehouse Foods 2025</p>
//     </footer>
//   )
// }
























