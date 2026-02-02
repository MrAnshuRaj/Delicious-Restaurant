const events = [
  {
    title: "Wine Tasting Evenings",
    desc: "Explore curated wine selections with expert sommeliers.",
    tag: "Monthly",
  },
  {
    title: "Chef’s Table Experience",
    desc: "An exclusive multi-course tasting menu crafted live by our chef.",
    tag: "Limited Seats",
  },
  {
    title: "Live Jazz Nights",
    desc: "Enjoy fine dining with live jazz performances every Friday.",
    tag: "Fridays",
  },
  {
    title: "Wine Tasting Evenings",
    desc: "Explore curated wine selections with expert sommeliers.",
    tag: "Monthly",
  },
  {
    title: "Chef’s Table Experience",
    desc: "An exclusive multi-course tasting menu crafted live by our chef.",
    tag: "Limited Seats",
  },
  {
    title: "Live Jazz Nights",
    desc: "Enjoy fine dining with live jazz performances every Friday.",
    tag: "Fridays",
  },
];

const Events = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h1 className="text-4xl mt-4 font-serif font-bold text-center mb-4">
      Events & Experiences
    </h1>
    <p className="text-center text-gray-600 mb-12">
      Curated experiences beyond dining.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {events.map((event, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition"
        >
          <span className="inline-block mb-4 text-sm px-3 py-1 rounded-full bg-[#f5ecd5] text-[#bfa76a] font-medium">
            {event.tag}
          </span>
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          <p className="text-gray-600 leading-relaxed">{event.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Events;
