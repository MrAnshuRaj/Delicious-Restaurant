import ContactForm from "../components/Contact/ContactForm";

const CONTACT = [
  {
    label: "Location",
    value: "123 Culinary Lane, Food City, FC 12345",
    link: "https://maps.google.com",
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    label: "Email",
    value: "info@restaurant.com",
    link: "mailto:info@restaurant.com",
  },
];

const Contact = () => (
  <section className="bg-[#f7f6f3] pt-24 md:pt-28 pb-14 md:pb-16">
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
          Contact Us
        </h1>
        <p className="text-[#5c5a57] max-w-2xl mx-auto text-base md:text-lg">
          We’re here to help with reservations, private events, or any
          questions. Reach out and our team will respond promptly.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Contact Info */}
        <div className="space-y-5">
          {CONTACT.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg border border-[#e0dcd5] px-6 py-4 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-[#b3a98b] mb-1">
                {item.label}
              </div>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] text-base font-medium hover:text-[#d4af37] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <div className="text-[#1a1a1a] text-base font-medium">
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Contact Form */}
        <div className="bg-white rounded-lg border border-[#e0dcd5] px-6 py-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
