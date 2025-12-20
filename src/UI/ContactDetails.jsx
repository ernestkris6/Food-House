import { FiMapPin, FiMail, FiPhone,FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";


export default function ContactDetails() {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a question, booking request, or custom inquiry?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h3>
              <p className="text-gray-600 mt-2">
                Reach out via phone, email, or visit us at our location.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FiPhone className="text-amber-500 text-xl mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+234 806 529 2598</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMail className="text-amber-500 text-xl mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">bakehousefoods.confectionery@gmail.com</p>
                </div>
    
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="text-amber-500 text-xl mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">
                    Bodija, Ibadan, Nigeria
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-medium text-gray-900 mb-3">Follow Us</p>
                
                <div className="flex items-center gap-4">
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-gray-300 hover:bg-amber-500 hover:text-white transition"
                        >
                        <FiInstagram size={20} />
                        </a>

                        <a
                        href="https://facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-gray-300 hover:bg-amber-500 hover:text-white transition"
                        >
                        <FiFacebook size={20} />
                        </a>

                        <a
                        href="https://facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-gray-300 hover:bg-amber-500 hover:text-white transition"
                        >
                        <FiLinkedin size={20} />
                        </a>
                </div>
            </div>
            </div>
          </div>
          

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 outline-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                onClick={(e) =>e.preventDefault()}
                className="w-full bg-amber-500 cursor-pointer hover:bg-amber-400 transition-colors text-white font-medium py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 mb-4">
            Prefer instant response?
          </p>
          <a
            href="https://wa.me/2348065292598"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
