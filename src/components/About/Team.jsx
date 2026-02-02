const Team = () => {
  const team = [
    {
      name: "Chef Marco Rossi",
      role: "Executive Chef",
      description:
        "With 20+ years of culinary expertise, Marco leads our kitchen with innovation and passion.",
    },
    {
      name: "Sarah Mitchell",
      role: "Head Sommelier",
      description:
        "An expert in wine pairing, Sarah curates our exceptional wine collection with precision.",
    },
    {
      name: "James Patterson",
      role: "Pastry Chef",
      description:
        "James creates magnificent desserts that are both works of art and culinary masterpieces.",
    },
    {
      name: "Elena Rodriguez",
      role: "Restaurant Manager",
      description:
        "Elena ensures every guest experiences flawless service and unforgettable moments.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-black mb-4">Our Team</h2>
          <p className="text-[#5c5a57] max-w-2xl mx-auto">
            Meet the talented individuals dedicated to making your dining
            experience extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg text-center shadow hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-[#18130d]">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-[#bfa76a] mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#d4af37] mb-3">
                {member.role}
              </p>
              <p className="text-[#5c5a57] text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
