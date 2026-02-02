const TestimonialsStats = () => {
  const stats = [
    { number: "5000+", label: "Happy Guests" },
    { number: "4.9★", label: "Average Rating" },
    { number: "15+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">
                {stat.number}
              </h3>
              <p className="text-[#5c5a57] text-lg font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
