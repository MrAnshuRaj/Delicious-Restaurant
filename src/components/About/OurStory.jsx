import restaurantImage from "../../assets/restaurantint.jpg";

const OurStory = () => {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] rounded-lg blur opacity-30"></div>
              <img
                src={restaurantImage}
                alt="Restaurant Story"
                className="relative w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-black">Our Story</h2>
            <p className="text-[#5c5a57] leading-relaxed text-lg mb-4">
              Founded in 2010, Delicious was born from a passion for authentic
              culinary experiences. What started as a humble kitchen has grown
              into a beacon of fine dining excellence, celebrated for our
              commitment to quality and innovation.
            </p>
            <p className="text-[#5c5a57] leading-relaxed text-lg mb-4">
              Our chef-driven approach ensures that every dish on our menu
              reflects our dedication to sourcing the finest ingredients and
              crafting unforgettable flavors that delight the senses.
            </p>
            <p className="text-[#5c5a57] leading-relaxed text-lg">
              At Delicious, dining is not just about food—it's about creating
              memories, celebrating moments, and sharing experiences that last a
              lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
