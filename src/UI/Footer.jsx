import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#E7f5f5] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Logo */}
        <div
          className="mb-10 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <Logo />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* About */}
          <div className="bg-gray-900 rounded-lg p-5 text-white/90 space-y-3">
            <p className="text-sm leading-6">
              Bakehouse Food & Confectionery delivers exquisite meals that bring class, flavour, and satisfaction to every celebration.
            </p>
            <p className="text-sm">
              “From native delicacies to continental cuisine, we serve food that tells a story of excellence.”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={()=> scrollTo(0,0)}><Link to="/" className="hover:text-black/60">Home</Link></li>
              <li onClick={()=> scrollTo(0,0)}><Link to="/about" className="hover:text-black/60">About</Link></li>
              <li onClick={()=> scrollTo(0,0)}><Link to="/menu" className="hover:text-black/60">Menu</Link></li>
              <li onClick={()=> scrollTo(0,0)}><Link to="/services" className="hover:text-black/60">Services</Link></li>
              <li onClick={()=> scrollTo(0,0)}><Link to="/contact" className="hover:text-black/60">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="text-gray-900">
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/+2348030769110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  WhatsApp: +234 803 076 9110
                </a>
              </li>
              <li>
                <a
                  href="mailto:bakehousefoods.confectionery@gmail.com"
                  className="hover:text-gray/60"
                >
                  Email: bakehousefoods.confectionery@gmail.com
                </a>
              </li>
              <li>Location: Plot 7, Suite 33, In God We Trust Plaza, Sawmill, Old Ife Road, Ibadan.</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.instagram.com/glamby_lasauce"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition"
              >
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-900" />

        {/* Copyright */}
        <p className="text-center text-xs">
          © {new Date().getFullYear()} Bakehouse Foods. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


























