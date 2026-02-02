const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8f5f0] to-white text-black py-32 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-8"></div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide text-black">
          About{" "}
          <span className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
            Delicious
          </span>
        </h1>

        <p className="text-xl text-[#5c5a57] max-w-3xl mx-auto leading-relaxed">
          A journey of culinary passion, where tradition meets innovation and
          every dish tells a story of excellence
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
