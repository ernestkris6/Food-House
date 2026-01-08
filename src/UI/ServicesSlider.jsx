
// import { useEffect, useRef, useState } from "react";

// const services = [
//   { title: "Native Meals", image: "/images/native.jpg" },
//   { title: "Continental Dishes", image: "/images/continental.jpg" },
//   { title: "Side Dishes", image: "/images/sides.jpg" },
//   { title: "Food Trays", image: "/images/trays.jpg" },
//   { title: "Food in Bowls", image: "/images/bowls.jpg" },
//   { title: "Food in Boxes", image: "/images/boxes.jpg" },
//   { title: "Snacks & Confectionery", image: "/images/snacks.jpg" },
//   { title: "Corporate & Events Catering", image: "/images/events.jpg" },
// ];

// export default function ServicesSlider() {
//   const sliderRef = useRef(null);
//   const [index, setIndex] = useState(0);

//   // Auto-play
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % services.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   // Scroll effect
//   useEffect(() => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollTo({
//         left: sliderRef.current.clientWidth * index,
//         behavior: "smooth",
//       });
//     }
//   }, [index]);

//   return (
//     <section className="">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Our Services
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Premium meals and professional catering for every occasion.
//           </p>
//         </div>

//         {/* Slider */}
//         <div
//           ref={sliderRef}
//           className="flex overflow-x-hidden scroll-smooth"
//         >
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="min-w-full px-4"
//             >
//               <div className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40" />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
//                   <h3 className="text-2xl md:text-3xl font-semibold">
//                     {service.title}
//                   </h3>

//                   <button className="mt-4 w-fit bg-amber-500 hover:bg-amber-400 transition px-6 py-3 rounded-full text-sm font-medium">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center gap-3 mt-8">
//           {services.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full transition ${
//                 index === i
//                   ? "bg-amber-500 scale-110"
//                   : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


















import { useEffect, useRef, useState } from "react";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
// import image5 from '../assets/image5.jpg'
// import image6 from '../assets/image6.jpg'
// import image7 from '../assets/image7.jpg'
// import image8 from '../assets/image8.jpg'


const services = [
  { name: "Native Meals", image: image1 },
  { name: "Continental Dishes", image: image2 },
  { name: "Side Dishes", image: image3 },
  { name: "Food Trays", image: image4 },
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


