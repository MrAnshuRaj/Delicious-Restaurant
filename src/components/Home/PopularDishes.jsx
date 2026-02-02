import dish from "../../assets/dish1.png";
import dish2 from "../../assets/food2.jpg";
import dish3 from "../../assets/food3.jpg";
import pasta from "../../assets/pasta.jpg";
import grilledChicken from "../../assets/grilledchicken.jpg";
const dishes = [
  { id: 1, name: "Pasta Primavera", img: pasta },
  { id: 2, name: "Grilled Chicken", img: grilledChicken },
  { id: 3, name: "Classic Burger", img: dish },
];

const PopularDishes = () => {
  return (
    <section className="py-28 bg-[#f2efe9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-14 h-[3px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-5"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2a2a2a]">
            Popular Dishes
          </h2>
          <p className="mt-4 text-[#6a6a6a] max-w-xl mx-auto">
            A selection of our most loved dishes, crafted with care and served
            with refined flavors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#faf9f6] rounded-2xl overflow-hidden
              shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              transition-all duration-500"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#2a2a2a] mb-2">
                  {dish.name}
                </h3>
                <p className="text-[#6a6a6a] text-sm leading-relaxed">
                  A customer favorite, prepared with premium ingredients and an
                  eye for detail.
                </p>

                {/* Subtle Gold Divider */}
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mx-auto mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
