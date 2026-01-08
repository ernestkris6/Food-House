import { Link } from "react-router-dom";

export default function ErrorDetails() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-6">
      <div className="max-w-xl text-center bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 animate-fadeIn">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-4xl">
            🍽️
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-amber-600 tracking-tight">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! This page is not on the menu
        </h2>

        <p className="mt-3 text-gray-600 leading-relaxed">
          The page you’re looking for may have been moved, deleted, 
          or never existed. Let’s get you back to something delicious.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition shadow"
          >
            Back to Home
          </Link>

          <Link
            to="/menu"
            className="px-6 py-3 rounded-xl border border-amber-400 text-amber-600 font-medium hover:bg-amber-50 transition"
          >
            View Menu
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-sm text-gray-400">
          Error code: 404 • GLAM BY LA_SAUCE
        </p>
      </div>
    </section>
  );
}
