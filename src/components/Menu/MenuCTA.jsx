import { NavLink } from "react-router-dom";

const MenuCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r  text-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Indulge?
        </h2>
        <p className="text-lg mb-10 text-black/80 max-w-2xl mx-auto">
          Reserve your table now and experience the culinary excellence our menu
          has to offer.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <NavLink
            to="/reservation"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#18130d] hover:text-[#d4af37] transition-all duration-300"
          >
            Reserve a Table
          </NavLink>
          <NavLink
            to="/contact"
            className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-[#d4af37] transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MenuCTA;
