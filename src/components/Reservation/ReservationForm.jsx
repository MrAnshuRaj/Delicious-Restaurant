import { useState } from "react";

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    dietaryRestrictions: "",
    selectedItems: [],
    specialRequests: "",
    occasion: "",
    seatingPreference: "standard",
    wineSelection: false,
  });

  const menuItems = [
    { id: 1, name: "Pan-Seared Wagyu Ribeye", category: "Main", price: 68 },
    { id: 2, name: "Chilean Sea Bass", category: "Main", price: 52 },
    { id: 3, name: "Lobster Thermidor", category: "Main", price: 58 },
    { id: 4, name: "Duck Confit", category: "Main", price: 48 },
    { id: 5, name: "Seared Scallops", category: "Appetizer", price: 18 },
    { id: 6, name: "Burrata Caprese", category: "Appetizer", price: 14 },
    { id: 7, name: "Chocolate Soufflé", category: "Dessert", price: 14 },
    { id: 8, name: "Crème Brûlée", category: "Dessert", price: 12 },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleItemSelect = (itemId) => {
    setFormData((prev) => ({
      ...prev,
      selectedItems: prev.selectedItems.includes(itemId)
        ? prev.selectedItems.filter((id) => id !== itemId)
        : [...prev.selectedItems, itemId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const selectedMenuItems = menuItems.filter((item) =>
    formData.selectedItems.includes(item.id),
  );
  const totalMenuPrice = selectedMenuItems.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section Progress Indicator */}
      <div className="flex items-center justify-between mb-10 px-2">
        <div className="flex items-center flex-1">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5d76e] flex items-center justify-center text-white font-bold text-sm">
            1
          </div>
          <div className="flex-1 h-1 mx-3 bg-gradient-to-r from-[#d4af37] to-[#f5d76e]"></div>
          <div className="w-10 h-10 rounded-full bg-[#e0dcd5] flex items-center justify-center text-[#1a1a1a] font-bold text-sm">
            2
          </div>
          <div className="flex-1 h-1 mx-3 bg-[#e0dcd5]"></div>
          <div className="w-10 h-10 rounded-full bg-[#e0dcd5] flex items-center justify-center text-[#1a1a1a] font-bold text-sm">
            3
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e0dcd5]">
        <div className="flex items-center mb-8 pb-6 border-b-2 border-[#e0dcd5]">
          <div className="text-4xl mr-4"></div>
          <div>
            <h3 className="text-3xl font-bold text-[#1a1a1a]">
              Guest Information
            </h3>
            <p className="text-[#5c5a57] text-sm mt-1">
              Please provide your personal details
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a] placeholder-[#9b9b9b]"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a] placeholder-[#9b9b9b]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a] placeholder-[#9b9b9b]"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Number of Guests *
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a]"
            >
              <option value="">Select number of guests</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Reservation Details */}
      <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e0dcd5]">
        <div className="flex items-center mb-8 pb-6 border-b-2 border-[#e0dcd5]">
          <div className="text-4xl mr-4"></div>
          <div>
            <h3 className="text-3xl font-bold text-[#1a1a1a]">
              Reservation Details
            </h3>
            <p className="text-[#5c5a57] text-sm mt-1">
              Choose your preferred date, time, and experience
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a]"
            />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Time *
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a]"
            />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Occasion
            </label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a]"
            >
              <option value="">Select occasion (optional)</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business Dinner</option>
              <option value="proposal">Proposal</option>
              <option value="celebration">Celebration</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Seating Preference
            </label>
            <select
              name="seatingPreference"
              value={formData.seatingPreference}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a]"
            >
              <option value="standard">Standard Seating</option>
              <option value="window">Window Seating</option>
              <option value="private">Private Corner</option>
              <option value="chef-table">Chef's Table</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pre-select Menu Items */}
      <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e0dcd5]">
        <div className="flex items-center mb-8 pb-6 border-b-2 border-[#e0dcd5]">
          <div className="text-4xl mr-4"></div>
          <div>
            <h3 className="text-3xl font-bold text-[#1a1a1a]">
              Pre-Select Your Menu
            </h3>
            <p className="text-[#5c5a57] text-sm mt-1">
              Choose your dishes in advance for a personalized experience
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {menuItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-4 p-5 border-2 border-[#e0dcd5] rounded-xl cursor-pointer hover:border-[#d4af37] hover:bg-[#f9f7f4] transition-all duration-300 group"
            >
              <input
                type="checkbox"
                checked={formData.selectedItems.includes(item.id)}
                onChange={() => handleItemSelect(item.id)}
                className="w-5 h-5 accent-[#d4af37] cursor-pointer"
              />
              <div className="flex-grow">
                <p className="font-semibold text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors">
                  {item.name}
                </p>
                <p className="text-xs text-[#9b9b9b] mt-1 tracking-wide">
                  {item.category.toUpperCase()}
                </p>
              </div>
              <p className="font-bold text-[#d4af37] text-lg">${item.price}</p>
            </label>
          ))}
        </div>
        {selectedMenuItems.length > 0 && (
          <div className="p-5 bg-gradient-to-r from-[#f8f5f0] to-white rounded-xl border-l-4 border-[#d4af37]">
            <div className="flex justify-between items-center">
              <p className="text-[#1a1a1a] font-semibold text-lg">
                Selected Items Total:
              </p>
              <p className="text-[#d4af37] font-bold text-2xl">
                ${totalMenuPrice}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Premium Options */}
      <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e0dcd5]">
        <div className="flex items-center mb-8 pb-6 border-b-2 border-[#e0dcd5]">
          <div className="text-4xl mr-4"></div>
          <div>
            <h3 className="text-3xl font-bold text-[#1a1a1a]">
              Premium Customizations
            </h3>
            <p className="text-[#5c5a57] text-sm mt-1">
              Enhance your dining experience with exclusive options
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <label className="flex items-center gap-4 p-4 border-2 border-[#e0dcd5] rounded-xl hover:border-[#d4af37] hover:bg-[#f9f7f4] transition-all cursor-pointer group">
            <input
              type="checkbox"
              name="wineSelection"
              checked={formData.wineSelection}
              onChange={handleChange}
              className="w-5 h-5 accent-[#d4af37] cursor-pointer"
            />
            <div className="flex-grow">
              <p className="font-semibold text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors">
                Wine Pairing Selection
              </p>
              <p className="text-sm text-[#5c5a57]">
                Expert sommelier pairings for each course (+$45)
              </p>
            </div>
          </label>

          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Dietary Restrictions
            </label>
            <select
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a]"
            >
              <option value="">Select dietary restrictions (if any)</option>
              <option value="none">No Restrictions</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten Free</option>
              <option value="dairy-free">Dairy Free</option>
              <option value="nut-allergy">Nut Allergy</option>
            </select>
          </div>

          <div>
            <label className="block text-[#1a1a1a] font-semibold mb-3 text-sm tracking-wide">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
              className="w-full px-5 py-3 border-2 border-[#e0dcd5] rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#f5d76e] focus:ring-opacity-30 transition-all bg-white text-[#1a1a1a] resize-none placeholder-[#9b9b9b]"
              placeholder="Let us know about special celebrations, allergies, or any preferences to make your experience unforgettable..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e6c547] to-[#f5d76e]
        text-[#1a1a1a] font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300
        transform hover:scale-105 border-2 border-[#d4af37] tracking-wide"
      >
        ✓ Complete My Reservation
      </button>
      <p className="text-center text-[#5c5a57] text-sm">
        We'll send a confirmation email within 24 hours
      </p>
    </form>
  );
};

export default ReservationForm;
