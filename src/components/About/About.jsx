import restaurantImage from "../../assets/restaurantint.jpg";

const About = () => {
  return (
    <section className="relative">
      {/* SMOOTH TRANSITION FROM HERO */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/90 to-[#f2efe9]"></div>

      {/* CONTENT */}
      <div className="relative bg-[#f2efe9] py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <div className="w-14 h-[3px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mb-6"></div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[#2a2a2a]">
              About Our Restaurant
            </h2>

            <p className="text-[#5f5f5f] leading-relaxed text-lg">
              Crafted with passion and served with elegance, our restaurant
              blends time-honored traditions with modern innovation to create a
              dining experience that feels refined, warm, and unforgettable.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full h-[380px] rounded-2xl overflow-hidden bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
            <img
              src={restaurantImage}
              alt="Restaurant Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
