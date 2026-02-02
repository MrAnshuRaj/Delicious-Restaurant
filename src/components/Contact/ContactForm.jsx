import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {["name", "email"].map((field) => (
        <input
          key={field}
          name={field}
          required
          placeholder={field === "name" ? "Full Name" : "Email Address"}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-lg border border-[#dcd7cf]
          focus:border-[#d4af37] focus:ring-0 outline-none"
        />
      ))}

      <textarea
        name="message"
        rows="5"
        required
        placeholder="Your message"
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-lg border border-[#dcd7cf]
        focus:border-[#d4af37] outline-none resize-none"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-lg font-semibold
        bg-[#111111] text-[#d4af37] hover:bg-black transition"
      >
        Send Message
      </button>

      {sent && (
        <p className="text-sm text-[#5c5a57] mt-2">
          Thank you. We’ll be in touch shortly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
