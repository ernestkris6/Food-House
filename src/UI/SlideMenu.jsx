import React from 'react'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/image13.jpg'
import image7 from '../assets/image7.jpg'
import image15 from '../assets/image15.jpg'
import image16 from '../assets/image16.jpg'
import image17 from '../assets/image17.jpg'
// import image18 from '../assets/image18.jpg'

const slide = [
    {
        id: 0,
        img: image12,
        alt: "",
        desc: "Continental dishes",
        price: "₦7,000",
    },
    {
        id: 1,
        img: image13,
        alt: "",
        desc: `Native meals`,
        price: "₦5,000",
    },
    {
        id: 2,
        img: image7,
        alt: "",
        desc: "Snacks",
        price: "₦3,500",

    },
    {
        id: 3,
        img: image15,
        alt: "",
        desc: "Brekfast",
        price: "₦5,500",
    },
    {
        id: 4,
        img: image16,
        alt: "",
        desc: "Waffles",
        price: "₦7,000",
    },
    {
        id: 5,
        img: image17,
        alt: "",
        desc: "Continental rice",
        price: "₦30,000",
    }
]

export default function SlideMenu() {
  return (
    <div className='py-6'>
        <h1 className='text-center font-medium text-xl pt-8 md:text-2xl'>Explore Our Products</h1>
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide max-w-7xl gap-4 mx-auto px-6 py-4">
        {slide.map((item, i) => (
          <div
            key={i}
            className="min-w-[256px] md:max-w-[278px]  cursor-pointer shadow-lg"
          >
            {/* <h3 className="text-xl md:text-2xl
             font-semibold text-black/80">
              {item.title}
            </h3> */}
            <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
              />
           <div className='bg-[#E7f5f5]'>
             <p className="pb-2 rounded-b-2xl pl-4 pt-2 text-black/90">
              {item.desc}
            </p>
            <p className="rounded-b-2xl pl-4 text-black/90">
              {item.price}
            </p>
            <div className='px-4'>
              <button className='w-full text-white/90 rounded bg-amber-600 hover:bg-amber-600/80 mb-4 py-2 cursor-pointer'>Order Now</button>
            </div>
           </div>
          </div>
    ))}
  </div>
</div>
  )
}



