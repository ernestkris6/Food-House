import React from "react";
import { useRevealOnScroll } from "../Hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

//bg-[#F5EFE6]

export default function SubscribeOrder() {

const { ref, isVisible } = useRevealOnScroll();
    
  return (
    <section className="w-full mt-[-4px]">

      {/* ================= SUBSCRIBE ================= */}
      <div ref={ref} className="px-6 md:px-16 py-20 bg-gradient-to-r from-amber-700 to-amber-500 text-black/80">
        <div className={`
        transition-all duration-10000 ease-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"} max-w-3xl mx-auto text-center`}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Place an Order?
          </h2>
          <p className="mb-8">
            Fresh • Hygienic • Timely delivery for all occasions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link  to='menu'>
            <p className="px-8 py-3 rounded-full border border-black/80 bg-black text-white transition-all duration-500 cursor-pointer" onClick={()=> scrollTo(0,0)}>
              Order Now
            </p>
            </Link>
            <a className="px-8 py-3 rounded-full border border-black/80 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer" href="https://wa.me/2348030769110?text=Hey%20Bakehouse%20Foods%2C%20Got%20treats%20in%20mind%2C%20Tell%20me%20more!" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


//bg-[#F5EFE6]
