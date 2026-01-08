import { useEffect, useRef, useState } from "react";
import image1 from '../assets/image1.jpg'
import image52 from '../assets/image52.jpg'
import image48 from '../assets/image48.jpg'
import image47 from '../assets/image47.jpg'
// import image5 from '../assets/image5.jpg'
// import image6 from '../assets/image6.jpg'
// import image7 from '../assets/image7.jpg'
// import image8 from '../assets/image8.jpg'


const services = [
  { name: "Native Meals", image: image1 },
  { name: "Continental Dishes", image: image52 },
  { name: "Side Dishes", image: image48 },
  { name: "Food Trays", image: image47 },
  // { name: "Food in Bowls", image: image5 },
  // { name: "Food in Boxes", image: image6 },
  // { name: "Snacks & Confectionery", image: image7 },
  // { name: "Corporate & Event Catering", image: image8 },
];

export default function ServicesDetails() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track hover state

  // Auto-play with pause-on-hover
  useEffect(() => {
    if (isPaused) return; // Don't run interval when paused

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Scroll on index change
  useEffect(() => {
    sliderRef.current?.scrollTo({
      left: sliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section className="py-8 md:py-6 bg-gradient-to-b from-neutral-900 to-black text-white cursor-pointer">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center pt-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-medium">
            Our Services
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Crafted meals and premium catering experiences for every occasion.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}   // Pause on hover
          onMouseLeave={() => setIsPaused(false)}  // Resume on leave
        >
          {services.map((service, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="relative h-[270px] md:h-[230px] rounded-3xl overflow-hidden">

                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Glass Card */}
                <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-[420px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl transition hover:bg-white/15">

                  <h3 className="text-xl md:text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    Premium quality, hygienic preparation, and stunning presentation.
                  </p>

                  <a href="https://wa.me/2348030769110?text=Hey%20Bakehouse%20Foods%2C%20Got%20treats%20in%20mind%2C%20Tell%20me%20more!" target="_blank" rel="noopener noreferrer">
                  <button className="mt-5 bg-amber-500 hover:bg-amber-400 transition text-black font-medium px-8 py-2 rounded-full cursor-pointer text-base">
                    Book Now
                  </button>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                index === i
                  ? "bg-amber-500 scale-110"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


