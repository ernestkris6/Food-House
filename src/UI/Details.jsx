import hero from '../assets/hero.jpg'


export default function Details() {
  return (
    <section className='mt-1'>
        <div className='bg-amber-500 text-center py-4'>
            <p className='uppercase text-[#f3274c] text-xs md:text-lg'>About Bakehouse & confectioneries</p>
            <h2 className='text-lg md:text-3xl font-medium'>Perfect Place For An Exceptional</h2>
            <h2 className='text-lg md:text-3xl font-medium'>Experience</h2>
        </div>

      <div className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900">
            Get to know us
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Bakehouse Food & Confectionery, we are passionate about crafting
              delicious meals and baked treats that bring people together. Every
              dish is prepared with care, quality ingredients, and attention to
              detail.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From intimate gatherings to large celebrations, we deliver
              exceptional taste, beautiful presentation, and reliable service you
              can trust.
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={hero}
              alt="About Bakehouse"
              className="w-full hover:scale-110 transition-all duration-500 cursor-pointer h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>
    </div>
    </section>
  )
}

