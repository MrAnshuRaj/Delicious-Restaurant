const ReservationHero = () => {
  return (
    <div className="relative py-24 md:py-32 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#d4af37] to-transparent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#f5d76e] to-transparent opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#d4af37] to-transparent rounded-full"></div>
            <span className="text-[#d4af37] font-semibold uppercase tracking-widest text-sm">
              🎯 Reserve Your Table
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-[#d4af37] to-transparent rounded-full"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Experience Fine{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
              Dining
            </span>
          </h1>

          <p className="text-[#c0b8b0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-2">
            Book your perfect table and customize your dining experience
          </p>
          <p className="text-[#a89888] text-sm md:text-base">
            Pre-select your menu, choose premium wine pairings, and receive special attention
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationHero;