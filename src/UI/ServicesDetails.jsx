import React from "react";
import image1 from '../assets/hero.jpg'


const services = [
  { name: "Native Meals", image: image1 },
  { name: "Continental Dishes", image: image1 },
  { name: "Side Dishes", image: image1 },
  { name: "Food Trays", image: image1 },
  { name: "Food in Bowls", image: image1 },
  { name: "Food in Boxes", image: image1 },
  { name: "Snacks & Confectionery", image: image1 },
  { name: "Corporate & Event Catering", image: image1 },
];

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* <ServicesSlider /> */}
        <h1 className="text-lg mt-0 mb-2 pt-6 md:text-3xl font-medium text-center text-amber-500">
          What we DO!
        </h1>
        
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
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
          <h2 className="text-3xl font-medium text-amber-500 mb-6">
            Perfect for Any Event
          </h2>
          <p className="text-gray-700 pb-8 max-w-2xl mx-auto">
            From corporate conferences to weddings, birthdays, launches, and picnics, we
            bring professional catering with delicious presentation and flavors that impress
            your guests every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;





