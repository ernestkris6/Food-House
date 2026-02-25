import { foods } from "../data/foodData";
import image33 from '../assets/image33.jpg'
import { useNavigate } from "react-router-dom";
import { slugify } from "../utils/slugify";



export default function MenuPage() {

  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden bg-[#fffdfa]">

     {/* Hero */}
      
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={image33}
                alt="About us"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
      
              <div className="relative text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-medium text-white/90">
          Our <span className="text-amber-500">Food Menu</span>
        </h1>
                <p className="mt-3 text-white/90">Great taste. Best quality.</p>
              </div>
            </div>

      {/* Stick Nav for Sections */}
      {/* <div className="top-0 z-30 bg-white py-3 shadow-sm flex justify-center gap-4 text-[14px] font-semibold">
        <a href="#parfaits" className="hover:text-amber-700">Pap parfaits</a>
        <a href="#continental" className="hover:text-amber-700">Intercontinental</a>
        <a href="#sides" className="hover:text-amber-700">Side Dishes</a>
        <a href="#snacks" className="hover:text-amber-700">Snacks & Confectionery</a>
        <a href="#snacks" className="hover:text-amber-700">Snacks</a>
      </div> */}


      {/* Native Meals - Grid */}
      <section className="py-14 px-5">
        <h2 className="text-xl md:text-2xl font-medium text-amber-900 mb-8">
          Pap Parfaits
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {foods.native.map((item) => (
            <div key={item.name} className="bg-white rounded-xl shadow group relative overflow-hidden">
              <img src={item.img} className="h-48 md:h-72 w-full object-cover rounded-t-xl group relative group-hover:scale-105 transition-transform duration-500 overflow-hidden" />
              <div className="p-3">
                <h4 className="font-medium text-amber-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button 
                  onClick={() => {navigate(`/menu/native/${slugify(item.name)}`)}} 
                  className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  View Details
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* <section id="continental" className="py-14 px-6 bg-amber-100">
        <h2 className="text-xl md:text-2xl font-medium text-amber-900 mb-6">
          Intercontinental Dishes
        </h2>
        <div className="flex gap-2 md:gap-4 overflow-x-scroll overflow-hidden snap-x">
          {foods.continental.map((item) => (
            <div key={item.name} className=" bg-white rounded-xl shadow">
              <img src={item.img} className="h-56 min-w-[250px] bg-white rounded-t-xl snap-center" />
              <div className="p-3">
                <h4 className="font-medium text-amber-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button 
                  onClick={() => {navigate(`/menu/continental/${slugify(item.name)}`)}} 
                  className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>    */}

              {/* 3️⃣ Side Dishes  */}
        
         {/* <section id="sides" className="py-14 px-6 bg-white text-amber-900">
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
                <button onClick={() => {navigate(`/menu/sides/${slugify(item.name)}`)}}
                        className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  View Details
                </button>
                
              </div>
             </div>
           ))}
         </div>
       </section> */}

      {/* 5️⃣ Snacks — OVERLAY HOVER */}
       {/* <section id="snacks" className="py-14 px-6 bg-amber-100 text-white">
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
                <button onClick={() => {navigate(`/menu/snacks/${slugify(item.name)}`)}} 
                        className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded cursor-pointer">
                  View Details
                </button>
              </div>
             </div>
           ))}
         </div>
       </section> */}
     </div>
   );
 }







      










