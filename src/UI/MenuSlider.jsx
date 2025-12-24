import React from 'react'

export default function MenuSlider() {
  return (
    <div>MenuSlider</div>
  )
}
































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
//     <section className="py-20 bg-gradient-to-b from-[#fafafa] to-[#f1f5f9]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Our Menu
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











// // import { useEffect, useRef, useState } from "react";

// // const services = [
// //   { title: "Native Meals", image: "/images/native.jpg" },
// //   { title: "Continental Dishes", image: "/images/continental.jpg" },
// //   { title: "Side Dishes", image: "/images/sides.jpg" },
// //   { title: "Food Trays", image: "/images/trays.jpg" },
// //   { title: "Food in Bowls", image: "/images/bowls.jpg" },
// //   { title: "Food in Boxes", image: "/images/boxes.jpg" },
// //   { title: "Snacks & Confectionery", image: "/images/snacks.jpg" },
// //   { title: "Corporate & Event Catering", image: "/images/events.jpg" },
// // ];

// // export default function MenuDetails() {
// //   const sliderRef = useRef(null);
// //   const [index, setIndex] = useState(0);

// //   // Auto-play
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setIndex((prev) => (prev + 1) % services.length);
// //     }, 4500);
// //     return () => clearInterval(timer);
// //   }, []);

// //   // Scroll on index change
// //   useEffect(() => {
// //     sliderRef.current?.scrollTo({
// //       left: sliderRef.current.clientWidth * index,
// //       behavior: "smooth",
// //     });
// //   }, [index]);

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-neutral-900 to-black text-white">
// //       <div className="max-w-7xl mx-auto px-6">

// //         {/* Header */}
// //         <div className="text-center mb-14">
// //           <h2 className="text-3xl md:text-4xl font-semibold">
// //             Our Services
// //           </h2>
// //           <p className="mt-4 text-white/70 max-w-2xl mx-auto">
// //             Crafted meals and premium catering experiences for every occasion.
// //           </p>
// //         </div>

// //         {/* Slider */}
// //         <div
// //           ref={sliderRef}
// //           className="flex overflow-hidden"
// //         >
// //           {services.map((service, i) => (
// //             <div key={i} className="min-w-full px-4">
// //               <div className="relative h-[420px] rounded-3xl overflow-hidden">

// //                 {/* Background Image */}
// //                 <img
// //                   src={service.image}
// //                   alt={service.title}
// //                   className="absolute inset-0 w-full h-full object-cover"
// //                 />

// //                 {/* Dark overlay */}
// //                 <div className="absolute inset-0 bg-black/50" />

// //                 {/* Glass Card */}
// //                 <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-[420px]
// //                                 backdrop-blur-xl bg-white/10 border border-white/20
// //                                 rounded-2xl p-6 shadow-xl
// //                                 transition hover:bg-white/15">

// //                   <h3 className="text-xl md:text-2xl font-semibold">
// //                     {service.title}
// //                   </h3>

// //                   <p className="mt-2 text-sm text-white/80">
// //                     Premium quality, hygienic preparation, and stunning presentation.
// //                   </p>

// //                   <button className="mt-5 bg-amber-500 hover:bg-amber-400 transition
// //                                      text-black font-medium px-6 py-3 rounded-full text-sm">
// //                     Book Now
// //                   </button>
// //                 </div>

// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Pagination Dots */}
// //         <div className="flex justify-center gap-3 mt-8">
// //           {services.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setIndex(i)}
// //               className={`w-3 h-3 rounded-full transition ${
// //                 index === i
// //                   ? "bg-amber-500 scale-110"
// //                   : "bg-white/40"
// //               }`}
// //             />
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
