import React from 'react'
import { Link } from 'react-router-dom'
import image6 from '../assets/image6.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image5 from '../assets/image5.jpg'
import image11 from '../assets/image11.jpg'

const images = [
  {
    id: 0,
    img: image6,
    alt: 'image 8',
    text: "Pies",
    desc: "Meat & Chicken Pie",
  },
  {
    id: 1,
    img: image8,
    alt: 'image 9',
    text: " Finger Foods",
    desc: "Beef Stick Meats",
  },
  {
    id: 2,
    img: image10,
    alt: 'image 10',
    text: "Quick Breakfast",
    desc: "Pancakes & Scrambled Eggs",
  },
  {
    id: 3,
    img: image9,
    alt: 'image 9',
    text: "Native meals",
    desc: "Moimoi",
  },
  {
    id: 4,
    img: image5,
    alt: 'image 9',
    text: "Yamarita",
    desc: "Yam & sauce",
  },
  {
    id: 5,
    img: image11,
    alt: 'image 9',
    text: "Native Soups",
    desc: "Efo-riro with assorted offals",
  },
]

export default function Products() {
  return (
    <div>
      <section className="px-6 md:px-16 py-20 bg-white/20">
        <h2 className="text-3xl font-medium mb-10 text-center">
          Top Trending Dishes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFF7ED] rounded-xl overflow-hidden shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-36 lg:h-72 object-cover"
              />
              <div className="px-2 py-4">
                <h4 className="font-medium text-amber-800">{item.text}</h4>
                <p className="text-base md:text-lg text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      <div className='text-center'>
       <p onClick={() => scrollTo(0,0)}>
         <Link to='menu'>
          <button 
            className='bg-[#f3274c] mt-24 text-white text-center px-8 py-3 rounded cursor-pointer hover:bg-black/60 hover:transition-all duration-500'>Explore More</button>
        </Link>
       </p>
      </div>
      </section>

      {/* ================= EVENTS & CATERING ================= */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-500 px-6 md:px-16 py-20 text-white/80">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Perfect for Every Occasion
        </h2>

        <p className="max-w-2xl mx-auto text-center text-white/70 mb-10">
          We cater for conferences, weddings, birthdays, seminars,
          launches, picnics, and private events.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            "Corporate Events",
            "Weddings",
            "Birthdays",
            "Seminars",
            "Product Launches",
            "Private Parties",
          ].map((event, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/20 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <p className="font-medium">{event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}






{/* <div className="p-3 bg-black/60">
                <h4 className="font-semibold"></h4>
                <p className="text-xs md:text-sm text-gray-300">
                  
                </p>
              </div> */}