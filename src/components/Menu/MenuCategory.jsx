import MenuItem from "./MenuItem";

const MenuCategory = ({ title, description, items }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Category Header */}
        <div className="mb-12">
          <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mb-4"></div>
          <h2 className="text-4xl font-bold text-black mb-3">{title}</h2>
          <p className="text-[#5c5a57] text-lg max-w-2xl">{description}</p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <MenuItem
              key={idx}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
