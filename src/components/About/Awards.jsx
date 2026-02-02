const Awards = () => {
  const awards = [
    {
      year: "2023",
      title: "Best Fine Dining Restaurant",
      organization: "Culinary Excellence Awards",
    },
    {
      year: "2022",
      title: "Michelin Star Recognition",
      organization: "Michelin Guide",
    },
    {
      year: "2021",
      title: "Chef of the Year",
      organization: "International Culinary Federation",
    },
    {
      year: "2020",
      title: "Best Customer Service",
      organization: "Hospitality Awards",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Recognition & Awards
          </h2>
          <p className="text-[#5c5a57] max-w-2xl mx-auto">
            Our dedication to excellence has been recognized by prestigious
            culinary organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-6 bg-[#f8f5f0] rounded-lg border-l-4 border-[#d4af37] hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5d76e]">
                  <span className="text-2xl font-bold text-[#18130d]">⭐</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#bfa76a] mb-1">
                  {award.year}
                </p>
                <h3 className="text-lg font-bold text-[#18130d] mb-1">
                  {award.title}
                </h3>
                <p className="text-[#5c5a57] text-sm">{award.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
