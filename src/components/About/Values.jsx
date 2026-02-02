const Values = () => {
  const values = [
    {
      icon: "🎯",
      title: "Authenticity",
      description:
        "We stay true to culinary traditions while embracing modern techniques to create dishes with genuine flavor and integrity.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description:
        "Every plate, every service, every interaction reflects our unwavering commitment to the highest standards of quality.",
    },
    {
      icon: "❤️",
      title: "Passion",
      description:
        "Our chefs pour their hearts into every creation, driven by a love for food and a desire to exceed expectations.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We source responsibly, support local farmers, and maintain eco-conscious practices in all our operations.",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
          <p className="text-[#5c5a57] max-w-2xl mx-auto">
            These principles guide every decision we make and define who we are
            as a restaurant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-[#f8f5f0] p-8 rounded-lg text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#bfa76a] mb-3">
                {value.title}
              </h3>
              <p className="text-[#5c5a57] leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
