const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r  text-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Experience Our Cuisine
        </h2>
        <p className="text-lg mb-10 text-black/80 max-w-2xl mx-auto">
          Join us for an unforgettable dining experience where passion,
          tradition, and innovation come together on every plate.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-black text-[#ffff] px-8 py-4 rounded-full font-semibold hover:bg-[#18130d] transition">
            Reserve a Table
          </button>
          <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-[#d4af37] transition">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
