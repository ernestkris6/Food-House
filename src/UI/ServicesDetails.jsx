import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import image31 from '../assets/image31.jpg'
import image2 from '../assets/image2.jpg'
import image33 from '../assets/image33.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image16 from '../assets/image16.jpg'
import image18 from '../assets/image18.jpg'
import image15 from '../assets/image15.jpg'


const services = [
  { name: "Native Meals", image: image2 },
  { name: "Food Trays", image: image33 },
  { name: "Continental Dishes", image: image16 },
  { name: "Side Dishes", image: image18 },
  { name: "Food in Bowls & Boxes", image: image5 },
  { name: "Snacks & Confectionery", image: image6 },
  { name: "Breakfast", image: image15 },
  { name: "Corporate & Event Catering", image: image31 },
];

const servicesContent = 
    [
      { title: "Corporate meetings and conferences",
        desc: "Professional catering tailored to keep your meetings productive and your guests satisfied, with timely service and refined presentation." },
      { title: "Seminars and product launches", 
        desc: "Impress your audience with delicious meals and snacks that complement your brand and elevate every moment of your event." },
      { title: "Weddings and birthday celebrations",
        desc: "Celebrate your special moments with beautifully prepared dishes that bring joy, flavor, and unforgettable memories to your occasion." },
      { title: "Outdoor picnics and private gatherings",
        desc: "Intimate catering crafted to match the warmth and style of your private celebrations, making every gathering feel special." },
      { title: "Bulk Orders", 
        desc: "Reliable bulk catering designed to serve large groups without compromising on taste, quality, or presentation." 
      },   
          
        ]

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* <ServicesSlider /> */}
        <h1 className="text-lg mb-2 pt-10 pb-6 md:text-3xl font-medium text-center text-amber-500">
          Explore Our Premium OFFERINGS!
        </h1>
        
        <p className="text-center text-base md:text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide a wide range of delicious meals and catering services for all occasions:
          from native and continental dishes, side dishes, food trays, bowls, boxes, snacks, to
          corporate and personal events like conferences, birthdays, weddings, picnics, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                  {service.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-lg md:text-3xl font-medium text-amber-500 mb-6">
            Perfect for Any Event
          </h2>
          <p className="text-gray-700 text-base md:text-lg pb-2 md:max-w-2xl mx-auto">
            From corporate conferences to weddings, birthdays, launches, and picnics, we
            bring professional catering with delicious presentation and flavors that impress
            your guests every time.
          </p>
          <p className="flex items-center gap-2 justify-center text-gray-700">Swipe left <FaArrowLeft /></p>
        </div>
        <div>
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide max-w-7xl gap-4 mx-auto px-6 py-8">
        {servicesContent.map((item, i) => (
          <div
            key={i}
            className="bg-[#E7f5f5] min-w-[300px] md:max-w-[278px] rounded-2xl p-8 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-black/80">
              {item.title}
            </h3>
            <p className="mt-4 text-black/90">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
        </div>
        <div className="pb-8 text-center">
          <button className="inline-block uppercase bg-black text-white text-base md:text-lg px-8 py-2 cursor-pointer rounded-full hover:bg-gray-800 transition"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;





  