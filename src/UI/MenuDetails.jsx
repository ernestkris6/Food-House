// import React from "react";

// const menuSections = [
//   {
//     title: "Native Meals",
//     desc: "Authentic African dishes rich in tradition and bold flavours.",
//     bg: "bg-[#FFF7ED]",
//     items: [
//       { name: "Jollof Rice", img: "/images/native1.jpg" },
//       { name: "Egusi Soup", img: "/images/native2.jpg" },
//       { name: "Ofada Rice", img: "/images/native3.jpg" },
//       { name: "Pounded Yam", img: "/images/native4.jpg" },
//     ],
//   },
//   {
//     title: "Continental Dishes",
//     desc: "Elegant international meals crafted for premium taste.",
//     bg: "bg-[#F5EFE6]",
//     items: [
//       { name: "Pasta Alfredo", img: "/images/cont1.jpg" },
//       { name: "Grilled Chicken", img: "/images/cont2.jpg" },
//       { name: "Steak & Veggies", img: "/images/cont3.jpg" },
//       { name: "Seafood Rice", img: "/images/cont4.jpg" },
//     ],
//   },
//   {
//     title: "Side Dishes",
//     desc: "Perfectly paired sides to complement every main meal.",
//     bg: "bg-[#EEF5F1]",
//     items: [
//       { name: "Fried Plantain", img: "/images/side1.jpg" },
//       { name: "Coleslaw", img: "/images/side2.jpg" },
//       { name: "Yam Fries", img: "/images/side3.jpg" },
//       { name: "Veggie Mix", img: "/images/side4.jpg" },
//     ],
//   },
//   {
//     title: "Food Trays & Boxes",
//     desc: "Neatly packaged meals ideal for group servings and events.",
//     bg: "bg-[#FAF3F0]",
//     items: [
//       { name: "Party Tray", img: "/images/tray1.jpg" },
//       { name: "Corporate Box", img: "/images/tray2.jpg" },
//       { name: "Family Pack", img: "/images/tray3.jpg" },
//       { name: "Event Combo", img: "/images/tray4.jpg" },
//     ],
//   },
//   {
//     title: "Snacks & Confectionery",
//     desc: "Freshly made treats for celebrations and casual moments.",
//     bg: "bg-[#F0F4F8]",
//     items: [
//       { name: "Cupcakes", img: "/images/snack1.jpg" },
//       { name: "Meat Pie", img: "/images/snack2.jpg" },
//       { name: "Chin Chin", img: "/images/snack3.jpg" },
//       { name: "Cookies", img: "/images/snack4.jpg" },
//     ],
//   },
// ];

// export default function Menu() {
//   return (
//     <main className="w-full overflow-hidden">

//       {/* ================= HERO ================= */}
//       <section className="bg-[#2A1E1A] text-[#FFF7ED] py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Explore Our Menu
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg opacity-90">
//           Carefully curated meals designed for everyday enjoyment and special occasions.
//         </p>
//       </section>

//       {/* ================= MENU SECTIONS ================= */}
//       {menuSections.map((section, idx) => (
//         <section key={idx} className={`${section.bg} py-16`}>
//           <div className="px-6 md:px-16 mb-8">
//             <h2 className="text-3xl font-bold text-[#2A1E1A] mb-2">
//               {section.title}
//             </h2>
//             <p className="text-gray-700 max-w-xl">
//               {section.desc}
//             </p>
//           </div>

//           {/* ===== SCROLLABLE GRID / SLIDER ===== */}
//           <div
//             className="
//               px-6 md:px-16
//               flex md:grid
//               md:grid-cols-3 lg:grid-cols-4
//               gap-6
//               overflow-x-auto md:overflow-visible
//               snap-x snap-mandatory
//               scrollbar-hide
//             "
//           >
//             {section.items.map((item, i) => (
//               <div
//                 key={i}
//                 className="
//                   min-w-[75%] sm:min-w-[50%] md:min-w-0
//                   snap-start
//                   bg-white/60 backdrop-blur-xl
//                   rounded-3xl overflow-hidden
//                   shadow-lg
//                   hover:scale-105 transition duration-300
//                 "
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="h-56 w-full object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold text-lg text-[#2A1E1A]">
//                     {item.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       {/* ================= EVENTS CTA ================= */}
//       <section className="bg-gradient-to-r from-amber-700 to-amber-500 py-16 px-6 text-center text-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Catering for Every Event
//         </h2>
//         <p className="max-w-3xl mx-auto opacity-95">
//           Conferences • Seminars • Weddings • Birthdays • Launches • Picnics • Corporate Events
//         </p>
//       </section>

//     </main>
//   );
// }






import React from "react";

export default function MenuDetails() {
  return (
    <main className="bg-[#0f0f0f] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="/images/hero-food.jpg"
          alt="Food background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="max-w-xl mx-auto text-gray-200">
            Carefully crafted meals made with passion, flavor, and finesse.
          </p>
        </div>
      </section>

      {/* ================= MENU CATEGORIES ================= */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Menu Categories
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Native Meals", img: "/images/native.jpg" },
            { title: "Continental Dishes", img: "/images/continental.jpg" },
            { title: "Side Dishes", img: "/images/sides.jpg" },
            { title: "Food Trays", img: "/images/trays.jpg" },
            { title: "Snacks & Confectionery", img: "/images/snacks.jpg" },
            { title: "Food in Boxes & Bowls", img: "/images/boxes.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden hover:scale-[1.03] transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  Deliciously prepared to satisfy every craving.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED DISHES ================= */}

      
      
      

      {/* ================= CTA SECTION ================= */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-amber-700 to-amber-500 text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Place an Order?
          </h2>
          <p className="mb-8">
            Fresh • Hygienic • Timely delivery for all occasions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-black text-white hover:opacity-90 transition">
              Order Now
            </button>
            <button className="px-8 py-3 rounded-full border border-black hover:bg-black hover:text-white transition">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}


    // <section className="bg-[#FFF7ED] py-16 px-6 md:px-16">
    //   <div
    //     className="
    //       grid grid-cols-1 md:grid-cols-2
    //       gap-10 items-center
    //       max-w-7xl mx-auto
    //     "
    //   >
    //     {/* ===== TEXT SIDE ===== */}
    //     <div>
    //       <h2 className="text-3xl md:text-4xl font-bold text-[#2A1E1A] mb-4">
    //         Get to Know Us
    //       </h2>

    //       <p className="text-gray-700 leading-relaxed mb-4">
    //         At <span className="font-semibold">Bakehouse Food & Confectionery</span>,
    //         we don’t just prepare meals — we craft experiences. Every dish is made
    //         with fresh ingredients, attention to detail, and a passion for quality.
    //       </p>

    //       <p className="text-gray-700 leading-relaxed mb-6">
    //         From everyday meals to large-scale events, our goal is simple:
    //         deliver food that looks beautiful, tastes exceptional, and leaves
    //         a lasting impression.
    //       </p>

    //       <button className="
    //         bg-gradient-to-r from-amber-700 to-amber-500
    //         text-white px-6 py-3 rounded-full
    //         font-medium
    //         hover:opacity-90 transition
    //       ">
    //         Learn More
    //       </button>
    //     </div>

    //     {/* ===== IMAGE SIDE ===== */}
    //     <div className="relative">
    //       <div className="overflow-hidden rounded-3xl shadow-lg">
    //         <img
    //           src="/images/about-us.jpg"
    //           alt="About Bakehouse Food"
    //           className="
    //             w-full h-[300px] md:h-[420px]
    //             object-cover
    //             transition-transform duration-500
    //             hover:scale-105
    //           "
    //         />
    //       </div>

    //       {/* Optional decorative overlay */}
    //       <div className="
    //         absolute -bottom-6 -left-6
    //         bg-white/70 backdrop-blur-lg
    //         px-5 py-3 rounded-2xl shadow-md
    //         hidden sm:block
    //       ">
    //         <p className="text-sm font-semibold text-[#2A1E1A]">
    //           Quality • Taste • Excellence
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>






























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
