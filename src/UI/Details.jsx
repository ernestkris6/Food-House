// import hero from '../assets/hero.jpg'
import { Link } from 'react-router-dom'
import image12 from '../assets/image12.jpg'
import image14 from '../assets/image14.jpg'


export default function Details() {
  return (
    <section className='mt-1'>
        <div className='bg-gradient-to-r from-amber-700 to-amber-500 text-center py-4'>
            <p className='uppercase text-white/90 text-xs md:text-lg'>About Bakehouse & confectioneries</p>
            <h2 className='text-lg md:text-3xl font-medium'>Perfect Place For An Exceptional</h2>
            <h2 className='text-lg md:text-3xl font-medium'>Experience</h2>
        </div>

     <section className="bg-[#FFF7ED] py-12 px-4 md:px-16">
      <div
        className="
          grid grid-cols-2
          gap-6 md:gap-10
          items-center
          max-w-7xl mx-auto
        "
      >
        {/* ===== TEXT SIDE ===== */}
        <div>
          <h2 className="text-xl md:text-3xl font-medium text-[#2A1E1A] mb-2">
            Get to Know Us
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
            At <span className="font-medium">Bakehouse Food & Confectionery</span>,
            we create meals that combine taste, elegance, and quality.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            From daily meals to special events, every dish is prepared to impress.
          </p>

          <Link to='about'>
            <button
            onClick={()=> scrollTo(0,0)}
            className="
              bg-gradient-to-r from-amber-700 to-amber-500
              text-white text-sm md:text-base
              px-6 py-2 md:px-8 md:py-3
              rounded-full cursor-pointer    font-light
              hover:opacity-90 transition
            "
          >
            Learn More
          </button>
          </Link>
        </div>

        {/* ===== IMAGE SIDE ===== */}
        <div>
          <div className="flex flex-row gap-4">
          <div className="overflow-hidden rounded-2xl shadow-2xl lg:w-[360px]">
            <img
              src={image12}
              alt="About Bakehouse Food"
              className="
                w-full
                h-[260px] md:h-[260px] lg:h-[360px] lg:w-[360px]
                object-cover
                transition-transform duration-500
                hover:scale-105"
            />
          </div>
          <div className="hidden md:block overflow-hidden rounded-2xl shadow-2xl lg:w-[360px]">
            <img
              src={image14}
              alt="About Bakehouse Food"
              className="
                w-full
                h-[260px] md:h-[260px] lg:h-[360px] lg:w-[360px]
                object-cover
                transition-transform duration-500
                hover:scale-105"
            />
          </div>

        </div>
        </div>
        
      </div>
    </section>
    </section>
  )
}

