import { useNavigate, useParams } from "react-router-dom";
// import { foods } from "../data/foodData";
// import { slugify } from "../utils/slugify";

export default function MenuInfo() {
  const params = useParams();
  const navigate = useNavigate();

  // normalize params
  const category = params.category?.toLowerCase();
  const foodId = params.foodId;

  // 🔍 DEBUG (remove after confirming)
  console.log("PARAMS:", params);

  // guard: invalid category
  if (!category || !foods[category]) {
    return (
      <p className="p-6 text-center text-red-600">
        Invalid category 😢
      </p>
    );
  }

  const food = foods[category].find(
    (item) => slugify(item.name) === foodId
  );

  if (!food) {
    return (
      <p className="p-6 text-center">
        Food item not found 😢
      </p>
    );
  }

  return (
    <section className="max-w-3xl md:justify-center md:items-center mx-auto px-6 py-12 grid md:grid-cols-2 gap-5">
      <img
        src={food.img}
        alt={food.name}
        className="w-full h-[360px] md:w-full md:h-[320px] object-cover rounded-2xl shadow-2xl"
      />

      <div>
        <h1 className="text-3xl font-medium">{food.name}</h1>
        <p className="text-xl text-amber-600 mt-2">{food.price}</p>

        <p className="mt-4 text-gray-600">
          {food.desc || "Freshly prepared with premium ingredients."}
        </p>

        <div className="flex gap-2">
          <a href={`https://wa.me/2348030769110?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(food.name)}`}
          className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600/80 transition" target="_blank" rel="noopener noreferrer">
            Order on WhatsApp</a>


        <button onClick={()=> navigate(-1)} className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition" >Go Back</button>
        </div>
      </div>
    </section>
  );
}




















// import { useParams } from "react-router-dom";
import { foods } from "../data/foodData";
import { slugify } from "../utils/slugify";

// export default function MenuInfo() {
//   const { category, foodId } = useParams();

//   // guard: invalid category
//   if (!foods[category]) {
//     return (
//       <p className="p-6 text-center text-red-600">
//         Invalid category 😢
//       </p>
//     );
//   }

//   const food = foods[category].find(
//     (item) => slugify(item.name) === foodId
//   );

//   if (!food) {
//     return (
//       <p className="p-6 text-center">
//         Food item not found 😢
//       </p>
//     );
//   }

//   return (
//     <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
//       <img
//         src={food.img}
//         alt={food.name}
//         className="w-full h-[320px] object-cover rounded-2xl shadow"
//       />

//       <div>
//         <h1 className="text-3xl font-bold">{food.name}</h1>
//         <p className="text-xl text-amber-600 mt-2">{food.price}</p>

//         <p className="mt-4 text-gray-600">
//           {food.desc || "Freshly prepared with premium ingredients."}
//         </p>

//         <a
//           href={`https://wa.me/2348030769110?text=Hi%2C%20I%20want%20to%20order%20${food.name}`}
//           className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg"
//         >
//           Order on WhatsApp
//         </a>
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import { useParams } from "react-router-dom";
// import { foods } from "../data/foodData";
// import { slugify } from "../utils/slugify";

// export default function MenuInfo() {
//   const { category, foodId } = useParams();

//   // get foods in category
//   const foodList = foods[category];

//   // find food by slug
//   const food = foodList?.find(
//     (item) => slugify(item.name) === foodId
//   );

// console.log("PARAMS:", category, foodId);
// console.log("FOODS KEYS:", Object.keys(foods));
// console.log("FOOD LIST:", foods[category]);




//   if (!food) {
//     return (
//       <p className="p-6 text-center text-lg">
//         Food item not found 😢
//       </p>
//     );
//   }

//   return (
//     <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
//       {/* Image */}
//       <img
//         src={food.img}
//         alt={food.name}
//         className="w-full h-[320px] object-cover rounded-2xl shadow"
//       />

//       {/* Content */}
//       <div>
//         <h1 className="text-3xl font-bold">{food.name}</h1>
//         <p className="text-xl text-amber-600 mt-2">{food.price}</p>

//         <p className="mt-4 text-gray-600">
//           {food.desc || "Freshly prepared with premium ingredients."}
//         </p>

//         <a
//           href={`https://wa.me/2348030769110?text=Hi%2C%20I%20want%20to%20order%20${food.name}`}
//           className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
//         >
//           Order on WhatsApp
//         </a>
//       </div>
//     </section>
//   );
// }


















// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { foods } from '../data/foodData';
// import { slugify } from '../utils/slugify';

// export default function MenuInfo() {
    
//     const { category, slug } = useParams();

//     const foodList = foods[category];

//     const food = foodList?.find((item) => slugify(item.name) === slug);

//     if(!food) {
//         return (
//             <p className='p-6'>Food item not found!😢</p>
//         )
//     } 

//     return (
//     <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
//       <img
//         src={food.category.img}
//         alt={food.category.name}
//         className="w-full h-full object-cover rounded-2xl shadow"
//       />

//       <div>
//         <h1 className="text-3xl font-bold">{food.category.name}</h1>
//         <p className="text-xl text-amber-600 mt-2">{food.category.price}</p>

//         <p className="mt-4 text-gray-600">
//           {food.category.desc || "Freshly prepared with premium ingredients."}
//         </p>

//         <a
//           href={`https://wa.me/2348030769110?text=Hi%2C%20I%20want%20to%20order%20${food.name}`}
//           className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
//         >
//           Order on WhatsApp
//         </a>
//       </div>
//     </section>
//   );
// }


//   // return (
//   //   <section className="p-6 max-w-4xl mx-auto">
//   //     <img
//   //       src={food.img}
//   //       alt={food.name}
//   //       className="w-full h-[300px] object-cover rounded-xl"
//   //     />

//   //     <div className="mt-6">
//   //       <h1 className="text-3xl font-bold">{food.name}</h1>
//   //       <p className="text-amber-600 text-xl mt-2">{food.price}</p>
//   //       <p className="mt-4 text-gray-600">{food.description}</p>

//   //       <a
//   //         href={`https://wa.me/2348030769110?text=Hi%2C%20I%20want%20to%20order%20${food.name}`}
//   //         className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg"
//   //       >
//   //         Order on WhatsApp
//   //       </a>
//   //     </div>
//   //   </section>
//   // )
// //}
