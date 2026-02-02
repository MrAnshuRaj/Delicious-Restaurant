const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <span className="text-[#d4af37] font-bold text-lg">${price}</span>
        </div>
        <p className="text-[#5c5a57] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
