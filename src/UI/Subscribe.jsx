import React from "react";
import { useRevealOnScroll } from "../Hooks/useRevealOnScroll";

//bg-[#F5EFE6]

export default function SubscribeOrder() {

const { ref, isVisible } = useRevealOnScroll();
    
  return (
    <section className="w-full">

      {/* ================= SUBSCRIBE ================= */}
      <div ref={ref} className="px-6 md:px-16 py-20 bg-gradient-to-r from-amber-700 to-amber-500 text-black">
        <div className={`
        transition-all duration-1000 ease-out
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
            <button className="px-8 py-3 rounded-full bg-black text-white hover:opacity-90 transition">
              Order Now
            </button>
            <button className="px-8 py-3 rounded-full border border-black hover:bg-black hover:text-white transition">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


//bg-[#F5EFE6]
