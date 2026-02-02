const Testimonials = () => {
  return (
    <section className="py-28 bg-[#f2efe9]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-14 h-[3px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-5"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2a2a2a]">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className="bg-[#faf9f6] px-10 py-12 rounded-2xl
          shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
        >
          <p className="text-[#5f5f5f] text-lg leading-relaxed italic">
            “An exceptional dining experience — from the thoughtfully crafted
            menu to the warm ambience and impeccable service. Every visit feels
            special.”
          </p>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto my-6"></div>

          <h4 className="text-[#2a2a2a] font-semibold tracking-wide">
            — A Valued Guest
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
