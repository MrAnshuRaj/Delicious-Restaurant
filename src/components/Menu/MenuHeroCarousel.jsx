import { useState, useEffect, useRef } from "react";
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

const MenuHeroCarousel = () => {
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

      {/* OVERLAY SYSTEM */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-black/45" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-linear-to-b from-transparent to-[#f2efe9]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="w-16 h-0.75 bg-linear-to-r from-[#d4af37] to-[#f5d76e] mb-6"></div>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-wide">
            Discover Our{" "}
            <span className="bg-linear-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
              Menu
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
            Explore a curated selection of signature dishes, crafted with
            premium ingredients and inspired by timeless culinary traditions.
          </p>
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

export default MenuHeroCarousel;
