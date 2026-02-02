import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-28  text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Accent */}
        <div className="w-14 h-[3px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-6"></div>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2a2a2a] mb-6">
          Ready to Dine With Us?
        </h2>

        <p className="text-[#5f5f5f] text-lg mb-10">
          Reserve your table and enjoy an elevated dining experience crafted
          with elegance and care.
        </p>

        <NavLink
          to="/reservation"
          className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e]
          text-black px-10 py-4 rounded-full font-semibold tracking-wide
          hover:shadow-[0_12px_35px_rgba(212,175,55,0.45)]
          hover:-translate-y-1 transition-all duration-300"
        >
          Reserve a Table
        </NavLink>
      </div>
    </section>
  );
};

export default CTA;
