const TestimonialCard = ({ quote, author, role, rating }) => {
  const stars = Array(rating).fill(0);

  return (
    <div
      className="bg-white px-8 py-10 rounded-xl
      shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {stars.map((_, i) => (
          <span key={i} className="text-[#d4af37] text-xl">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#5c5a57] text-lg leading-relaxed italic flex-grow mb-6">
        "{quote}"
      </p>

      {/* Divider */}
      <div className="w-8 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mb-4"></div>

      {/* Author */}
      <div>
        <h4 className="text-[#1a1a1a] font-semibold text-base">{author}</h4>
        <p className="text-[#9b9b9b] text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
