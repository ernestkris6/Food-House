import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg'

export default function AboutDetails() {
  return (
    <section className="bg-neutral-700 text-white">

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={image1}
          alt="About us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Serving Taste, <span className="text-amber-500">Creating Memories</span>
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            Exceptional meals and premium catering experiences crafted with passion and excellence.
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Who <span className="text-amber-500">We Are</span></h2>
          <p className="text-white/75 leading-relaxed">
            We are a premium food and catering brand dedicated to delivering delicious,
            hygienically prepared meals with stunning presentation. From everyday meals
            to large-scale events, we bring flavor, professionalism, and creativity to every plate.
          </p>

          <p className="mt-4 text-white/75 leading-relaxed">
            Our passion lies in combining rich local flavors with modern culinary techniques
            to create unforgettable dining experiences.
          </p>
        </div>

        <div className="relative h-[380px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl">
          <img
            src={image1}
            alt="Our kitchen"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="bg-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">What We Do</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Native Meals",
              "Continental Dishes",
              "Food Trays & Bowls",
              "Snacks & Confectionery",
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/5 border border-white/10
                           rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-lg font-medium text-amber-400">
                  {item}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Carefully crafted meals using premium ingredients and expert preparation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className='py-12'>
        <h2 className="text-center text-3xl font-semibold mb-2">Why Choose Us</h2>
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-10">
        {[
          { title: "Quality Products", desc: "Prepared with the highest hygiene standards and fresh ingredients." },
          { title: "Professional Services", desc: "Timely delivery and courteous, professional handling." },
          { title: "Beautiful Presentation", desc: "Meals that look as good as they taste." },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-amber-400">
              {item.title}
            </h3>
            <p className="mt-4 text-white/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      </div>
      {/* EVENTS */}
      <div className="relative py-24 overflow-hidden">
        <img
          src={image1}
          alt="Events catering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Catering for Every Occasion
          </h2>
          <p className="mt-5 text-white/80">
            Conferences, seminars, launches, weddings, birthdays, picnics, and corporate events —
            we deliver excellence every time.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-neutral-900 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Let’s Cater Your Next Event
        </h2>
        <p className="mt-4 text-white/70">
          Experience premium meals and outstanding service tailored just for you.
        </p>
        <p onClick={() => scrollTo(0,0)}>
          <Link to='/services'>
            <button className="mt-8 bg-amber-500 hover:bg-amber-400 transition text-black font-medium cursor-pointer px-8 py-1.5 md:py-2  rounded-full">
          What We Offer
        </button>
          </Link>
        </p>
      </div>

    </section>
  );
}
