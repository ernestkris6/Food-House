import React from "react";
import image33 from "../assets/image33.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"
import image19 from "../assets/image19.jpg"
import image13 from "../assets/image13.jpg"
import image12 from "../assets/image12.jpg"
import image14 from "../assets/image14.jpg"
import image15 from "../assets/image15.jpg"
import image16 from "../assets/image16.jpg"
import image17 from "../assets/image17.jpg"
import image34 from "../assets/image34.jpg"
import image35 from "../assets/image35.jpg"

 const foods = {
  native: [
    { name: "Efo-riro", price: "₦30,000", img: image2 },
    { name: "Ewa agoin", price: "₦5,000", img: image13 },
    { name: "Moi-moi", price: "₦1,000", img: image9 },
    { name: "Edikaikong soup", price: "₦30,000", img: image11 },
    { name: "Akara, pap & milk", price: "₦3,500", img: image34 },
    
  ],
  continental: [
    { name: "Basmati jollof & fried rice", price: "₦30,000", img: image17 },
    { name: "Stir-fry pasta with beef", price: "₦7,000", img: image12 },
    { name: "Yamarita & mushrooms", price: "₦6,500", img: image5 },
    { name: "Waffles, egg & baked beans", price: "₦7,000", img: image16 },
    { name: "Basmati rice", price: "₦5,000", img: image19 },
    { name: "Beef stick meats", price: "₦3,000", img: image8 },
    { name: "Pancakes & scrambled eggs", price: "₦5,000", img: image10 },
  ],
  snacks: [
    { name: "Chicken burger", price: "₦4,500", img: image3 },
    { name: "Sharwama", price: "₦3,500", img: image7 },
    { name: "Meat Pie", price: "₦1,000", img: image6 },
    { name: "Small chops", price: "₦4,500", img: image14 },
    { name: "Bread sandwich", price: "₦5,500", img: image15 },
    { name: "Peanuts", price: "₦3,550", img: image35 },
  ],
  sides: [
    { name: "Creamy coleslaw", price: "₦3,500", img: image14 },
    { name: "2 litre veg. salad", price: "₦3,500", img: image9 },
    { name: "Mixed veggies", price: "₦8,500", img: image6 },
    // { name: "Bread sandwich", price: "₦5,500", img: image15 },
  ]
 };

export default function MenuPage() {
  return (
    <div className="overflow-x-hidden bg-[#fffdfa]">

     {/* Hero */}
      
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={image33}
                alt="About us"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
      
              <div className="relative text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-medium text-white/90">
          Our <span className="text-amber-500">Food Menu</span>
        </h1>
                <p className="mt-3 text-white/90">Great taste. Best quality.</p>
              </div>
            </div>

      {/* Stick Nav for Sections */}
      <div className="top-0 z-30 bg-white py-3 shadow-sm flex justify-center gap-4 text-[14px] font-semibold">
        <a href="#native" className="hover:text-amber-700">Native</a>
        <a href="#continental" className="hover:text-amber-700">Continental</a>
        <a href="#sides" className="hover:text-amber-700">Side Dishes</a>
        {/* <a href="#snacks" className="hover:text-amber-700">Snacks & Confectionery</a> */}
        <a href="#snacks" className="hover:text-amber-700">Snacks</a>
      </div>


      {/* Native Meals - Grid */}
      <section id="native" className="py-14 px-5">
        <h2 className="text-xl md:text-2xl font-medium text-amber-900 mb-8">
          Native Meals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {foods.native.map((item) => (
            <div key={item.name} className="bg-white rounded-xl shadow group relative overflow-hidden">
              <img src={item.img} className="h-48 md:h-72 w-full object-cover rounded-t-xl group relative group-hover:scale-105 transition-transform duration-500 overflow-hidden" />
              <div className="p-3">
                <h4 className="font-medium text-amber-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

       <section id="continental" className="py-14 px-6 bg-amber-100">
        <h2 className="text-xl md:text-2xl font-medium text-amber-900 mb-6">
          Continental Dishes
        </h2>
        <div className="flex gap-2 md:gap-4 overflow-x-scroll overflow-hidden snap-x">
          {foods.continental.map((item) => (
            <div key={item.name} className=" bg-white rounded-xl shadow">
              <img src={item.img} className="h-56 min-w-[250px] bg-white rounded-t-xl snap-center" />
              <div className="p-3">
                <h4 className="font-medium text-amber-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>   

              {/* 3️⃣ Side Dishes  */}
        
         <section id="sides" className="py-14 px-6 bg-white text-amber-900">
         <h2 className="text-xl md:text-2xl font-medium mb-6">
           Side Dishes
         </h2>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
           {foods.sides.map((item) => (
             <div key={item.img} className="group relative rounded-xl overflow-hidden shadow">
               <img
                 src={item.img}
                 alt={item.img}
                 className="w-full h-48 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="p-3">
                <h4 className="font-medium text-amber-900">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  Order Now
                </button>
              </div>
             </div>
           ))}
         </div>
       </section>

      {/* 5️⃣ Snacks — OVERLAY HOVER */}
       <section id="snacks" className="py-14 px-6 bg-amber-100 text-white">
         <h2 className="text-xl md:text-2xl font-medium mb-6 text-amber-900">
           Snacks & Confectionery
         </h2>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
           {foods.snacks.map((item) => (
             <div key={item.img} className="group relative rounded-xl overflow-hidden shadow-lg">
               <img
                 src={item.img}
                 alt={item.img}
                 className="w-full h-48 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="p-3">
                <h4 className="font-medium text-amber-900">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  Order Now
                </button>
              </div>
             </div>
           ))}
         </div>
       </section>
     </div>
   );
 }







      










