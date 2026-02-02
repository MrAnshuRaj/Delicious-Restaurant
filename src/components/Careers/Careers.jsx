const roles = [
  {
    title: "Sous Chef",
    desc: "Work alongside our head chef crafting premium culinary experiences.",
  },
  {
    title: "Front-of-House Manager",
    desc: "Lead guest experiences with elegance and precision.",
  },
  {
    title: "Service Associate",
    desc: "Deliver world-class hospitality and service excellence.",
  },
];

const Careers = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <h1 className="text-4xl mt-4 font-serif font-bold text-center mb-4">
      Careers
    </h1>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Join a team passionate about culinary excellence and hospitality.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {roles.map((role, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#bfa76a] transition"
        >
          <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{role.desc}</p>
          <button className="text-[#bfa76a] font-semibold text-sm hover:underline">
            Apply Now →
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Careers;
