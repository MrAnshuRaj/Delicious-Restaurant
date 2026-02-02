import menuBg from "../../assets/food3.jpg"; // reuse any working food image

const MenuHero = () => {
  return (
    <section className="relative mt-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${menuBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-[#f2efe9]" />

      {/* Content */}
      <div className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-10 py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            {/* Accent */}
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-6"></div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide text-[#2a2a2a] mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e] bg-clip-text text-transparent">
                Menu
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#5f5f5f] max-w-3xl mx-auto leading-relaxed">
              A thoughtfully curated selection of signature dishes, crafted with
              premium ingredients and inspired by timeless culinary traditions.
            </p>

            {/* Optional micro detail */}
            <div className="mt-10 flex justify-center gap-6 text-sm text-[#7a7a7a]">
              <span>Seasonal</span>
              <span>•</span>
              <span>Chef-Curated</span>
              <span>•</span>
              <span>Premium Ingredients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition to menu */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#f2efe9]" />
    </section>
  );
};

export default MenuHero;
