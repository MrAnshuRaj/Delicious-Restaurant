import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import food from "../../assets/food.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import food5 from "../../assets/food5.jpg";

const slides = [
  { src: food, alt: "Signature Dish" },
  { src: food2, alt: "Elegant Plating" },
  { src: food3, alt: "Chef's Special" },
  { src: food4, alt: "Gourmet Experience" },
  { src: food5, alt: "Fine Dining Ambience" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4500,
    );
    return () => clearTimeout(timerRef.current);
  }, [current]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* SLIDES */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* PREMIUM OVERLAY SYSTEM */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* soft contrast for text */}
        <div className="absolute inset-0 bg-black/35" />

        {/* cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/45" />

        {/* smooth fade into About section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#f2efe9]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          {/* accent */}
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mb-6"></div>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-wide">
            Experience the Art of{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
              Fine Dining
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
            Crafted with passion, served with elegance. Discover flavors
            inspired by tradition and elevated by innovation.
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap gap-6">
            <NavLink
              to="/menu"
              className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e]
              text-black px-8 py-4 rounded-full font-semibold
              hover:shadow-[0_12px_35px_rgba(212,175,55,0.45)]
              hover:-translate-y-1 transition-all duration-300"
            >
              Explore Menu
            </NavLink>

            <NavLink
              to="/reservation"
              className="border border-[#d4af37] text-[#f5d76e]
              px-8 py-4 rounded-full font-semibold
              hover:bg-[#d4af37] hover:text-black
              transition-all duration-300"
            >
              Reserve a Table
            </NavLink>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full border-2 border-[#d4af37] transition ${
              i === current ? "bg-[#d4af37] scale-125" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#d4af37] animate-bounce z-30">
        ↓
      </div>
    </section>
  );
};

export default Hero;
