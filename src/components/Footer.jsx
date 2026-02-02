import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 mt-10">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logo}
              alt="Restaurant Logo"
              className="h-10 w-10 object-cover rounded-full shadow"
            />
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
              Delicious
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            A refined dining experience where flavor meets elegance. Crafted
            with passion, served with excellence.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">
            {["f", "📷", "𝕏", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                border border-[#d4af37]/40 text-[#d4af37]
                hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#f5d76e]
                hover:text-black transition-all duration-300 hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        {[
          {
            title: "Quick Links",
            links: [
              { label: "Home", to: "/" },
              { label: "Menu", to: "/menu" },
              { label: "About", to: "/about" },
              { label: "Reservations", to: "/reservation" },
              { label: "Events", to: "/events" },
            ],
          },
          {
            title: "Information",
            links: [
              { label: "Contact", to: "/contact" },
              { label: "Privacy Policy", to: "/privacypolicy" },
              { label: "Terms", to: "/terms" },
              { label: "FAQ", to: "/faq" },
              { label: "Careers", to: "/careers" },
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="mb-6 font-semibold text-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
              {section.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {section.links.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-[#f5d76e] transition-all hover:translate-x-2 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT */}
        <div>
          <h4 className="mb-6 font-semibold text-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
            Contact
          </h4>
          <div className="space-y-4 text-sm">
            <p>📍 123 Gourmet Street, Food City</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉ info@delicious.com</p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="mb-6 font-semibold text-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
            Newsletter
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Exclusive offers & chef secrets — straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 bg-white/10 border border-[#d4af37]/30 rounded-md
              text-white placeholder-gray-500 focus:outline-none focus:border-[#f5d76e]"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e]
              text-black font-semibold py-2 rounded-md
              hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)]
              hover:-translate-y-0.5 transition"
            >
              Subscribe
            </button>
            {subscribed && (
              <p className="text-green-400 text-sm">
                ✓ Subscription successful
              </p>
            )}
          </form>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#d4af37]/20 py-6 text-center text-sm text-gray-500">
        © {year} Delicious Restaurant. Crafted with elegance.
      </div>
    </footer>
  );
};

export default Footer;
