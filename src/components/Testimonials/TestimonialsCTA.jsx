const TestimonialsCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r ">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
          Share Your Experience
        </h2>
        <p className="text-lg text-[#2a2a2a] mb-10 max-w-2xl mx-auto">
          We'd love to hear about your dining experience. Your feedback helps us
          continue to exceed expectations.
        </p>
        <button
          className="px-12 py-4 bg-[#1a1a1a] text-white rounded-lg font-semibold
          hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg hover:shadow-xl
          transform hover:scale-105"
        >
          Leave a Review
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCTA;
