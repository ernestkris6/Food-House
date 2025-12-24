import React from 'react'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/image13.jpg'
import image14 from '../assets/image14.jpg'
import image15 from '../assets/image15.jpg'
import image16 from '../assets/image16.jpg'
import image17 from '../assets/image17.jpg'
// import image18 from '../assets/image18.jpg'

const slide = [
    {
        id: 0,
        img: image12,
        alt: "",
        desc: "Delicious meals"
    },
    {
        id: 1,
        img: image13,
        alt: "",
        desc: "Delicious meals"
    },
    {
        id: 2,
        img: image14,
        alt: "",
        desc: "Delicious meals"

    },
    {
        id: 3,
        img: image15,
        alt: "",
        desc: "Delicious meals"
    },
    {
        id: 4,
        img: image16,
        alt: "",
        desc: "Delicious meals"
    },
    {
        id: 5,
        img: image17,
        alt: "",
        desc: "Delicious meals"
    }
]

export default function SlideMenu() {
  return (
    <div className='py-6'>
        <h1 className='text-center font-medium text-lg pt-8 md:text-2xl'>Explore Our Products</h1>
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide max-w-7xl gap-4 mx-auto px-6 py-4">
        {slide.map((item, i) => (
          <div
            key={i}
            className="bg-[#E7f5f5] min-w-[300px] md:max-w-[278px] rounded-2xl p-8 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-black/80">
              {item.title}
            </h3>
            <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
            <p className="mt-4 text-black/90">
              {item.desc}
            </p>
          </div>
    ))}
</div>
 
    </div>
  )
}





//** */
        //   { title: "Corporate meetings and conferences", desc: "Prepared with the highest hygiene standards and fresh ingredients." },
        //   { title: "Seminars and product launches", desc: "Timely delivery and courteous, professional handling." },
        //   { title: "Weddings and birthday celebrations", desc: "Meals that look as good as they taste." },
        //   { title: "Outdoor picnics and private gatherings", desc: "Meals that look as good as they taste." },
        //   { title: "Bulk Orders", desc: "Meals that look as good as they taste." },
          
        
//  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {slide.map((service, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105"
//             >
//               <img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
//                   {service.name}
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>