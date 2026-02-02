const ReservationBenefits = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Guaranteed Seating",
      description: "Your table is reserved with priority seating",
    },
    {
      icon: "👨‍🍳",
      title: "Pre-Selection",
      description: "Let the chef know your preferences in advance",
    },
    {
      icon: "🍷",
      title: "Wine Pairing",
      description: "Expert sommelier recommendations included",
    },
    {
      icon: "🎉",
      title: "Special Occasions",
      description: "Personalized service for your celebration",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#d4af37] via-[#e6c547] to-[#f5d76e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            Premium Reservation Experience
          </h2>
          <p className="text-lg text-[#2a2a2a]">
            Enjoy exclusive benefits when you reserve with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#5c5a57]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReservationBenefits;
