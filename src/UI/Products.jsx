import React from 'react'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'

const images = [
  {
    id: 0,
    img: image8,
    alt: 'image 8'
  },
  {
    id: 1,
    img: image9,
    alt: 'image 9'
  },
  {
    id: 2,
    img: image10,
    alt: 'image 10'
  },
  {
    id: 1,
    img: image9,
    alt: 'image 9'
  },
  {
    id: 1,
    img: image9,
    alt: 'image 9'
  },
  {
    id: 1,
    img: image9,
    alt: 'image 9'
  },
]

export default function Products() {
  return (
    <div>
      <section className="px-6 md:px-16 py-20 bg-white/20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Dishes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt="Featured dish"
                className="h-72 w-full object-cover"
              />
              <div className="p-4 bg-black/60">
                <h4 className="font-semibold">Chef’s Special</h4>
                <p className="text-sm text-gray-300">
                  Available for events & bulk orders
                </p>
              </div>
            </div>
          ))}
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




