const faqs = [
  {
    q: "Do I need a reservation?",
    a: "Reservations are recommended, especially on weekends. Walk-ins are welcome based on availability.",
  },
  {
    q: "Do you offer private dining?",
    a: "Yes, we offer elegant private dining spaces for events, celebrations, and corporate gatherings.",
  },
  {
    q: "Are vegetarian options available?",
    a: "Absolutely. Our menu includes curated vegetarian and vegan selections.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations are accepted up to 4 hours before your reservation time.",
  },
];

const FAQ = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <h1 className="text-4xl mt-4 font-serif font-bold text-center mb-4">
      Frequently Asked Questions
    </h1>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Everything you need to know about dining with us.
    </p>

    <div className="grid gap-6 max-w-3xl mx-auto">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.q}</h3>
          <p className="text-gray-600 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
