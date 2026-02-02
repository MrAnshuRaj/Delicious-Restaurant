import { useNavigate } from "react-router-dom";

const ReservationConfirmation = ({ reservationData, onNewReservation }) => {
  const navigate = useNavigate();
  const selectedMenuItems = [
    { id: 1, name: "Pan-Seared Wagyu Ribeye", price: 68 },
    { id: 2, name: "Chilean Sea Bass", price: 52 },
    { id: 3, name: "Lobster Thermidor", price: 58 },
    { id: 4, name: "Duck Confit", price: 48 },
    { id: 5, name: "Seared Scallops", price: 18 },
    { id: 6, name: "Burrata Caprese", price: 14 },
    { id: 7, name: "Chocolate Soufflé", price: 14 },
    { id: 8, name: "Crème Brûlée", price: 12 },
  ].filter((item) => reservationData.selectedItems.includes(item.id));

  const totalMenuPrice = selectedMenuItems.reduce(
    (sum, item) => sum + item.price,
    0,
  );
  const winePrice = reservationData.wineSelection ? 45 : 0;
  const totalPrice = totalMenuPrice + winePrice;

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="space-y-8">
      {/* Success Banner */}
      <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-[#d4af37] shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#d4af37] to-[#f5d76e]"></div>
        <div className="p-10 text-center">
          <div className="text-6xl mb-4 animate-bounce"></div>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-3">
            Reservation Confirmed!
          </h2>
          <p className="text-[#5c5a57] text-lg">
            Your table is reserved. Check your email for details.
          </p>
          <div className="mt-6 inline-block px-8 py-2 bg-linear-to-r from-[#d4af37] to-[#f5d76e] rounded-full">
            <p className="text-[#1a1a1a] font-bold text-sm tracking-wide">
              CONFIRMATION #RES-
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Guest Information Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0dcd5] hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-[#e0dcd5]">
            <span className="text-3xl mr-3"></span>
            <h3 className="text-2xl font-bold text-[#1a1a1a]">Guest Details</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Name
              </p>
              <p className="text-[#1a1a1a] font-bold text-lg">
                {reservationData.name}
              </p>
            </div>
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Email
              </p>
              <p className="text-[#1a1a1a]">{reservationData.email}</p>
            </div>
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Phone
              </p>
              <p className="text-[#1a1a1a]">{reservationData.phone}</p>
            </div>
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Guests
              </p>
              <p className="text-[#1a1a1a] font-bold text-lg">
                {reservationData.guests}
              </p>
            </div>
          </div>
        </div>

        {/* Reservation Details Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0dcd5] hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-[#e0dcd5]">
            <span className="text-3xl mr-3"></span>
            <h3 className="text-2xl font-bold text-[#1a1a1a]">
              Reservation Info
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Date
              </p>
              <p className="text-[#1a1a1a] font-bold text-lg">
                {formatDate(reservationData.date)}
              </p>
            </div>
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Time
              </p>
              <p className="text-[#1a1a1a] font-bold text-lg">
                {formatTime(reservationData.time)}
              </p>
            </div>
            {reservationData.occasion && (
              <div>
                <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                  Occasion
                </p>
                <p className="text-[#1a1a1a] capitalize">
                  {reservationData.occasion}
                </p>
              </div>
            )}
            <div>
              <p className="text-[#5c5a57] text-sm font-semibold uppercase tracking-wide">
                Seating
              </p>
              <p className="text-[#1a1a1a] capitalize">
                {reservationData.seatingPreference}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Selection Card */}
      {selectedMenuItems.length > 0 && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0dcd5] hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-[#e0dcd5]">
            <span className="text-3xl mr-3"></span>
            <h3 className="text-2xl font-bold text-[#1a1a1a]">
              Your Pre-Selected Menu
            </h3>
          </div>
          <div className="space-y-3 mb-6">
            {selectedMenuItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3 bg-[#f9f7f4] rounded-lg hover:bg-[#f1eee7] transition-colors"
              >
                <div>
                  <p className="text-[#1a1a1a] font-semibold">{item.name}</p>
                </div>
                <p className="text-[#d4af37] font-bold text-lg">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
          {reservationData.dietaryRestrictions && (
            <div className="p-4 bg-[#f8f5f0] rounded-lg border-l-4 border-[#d4af37]">
              <p className="text-[#5c5a57] text-sm font-semibold mb-1">
                Dietary Restrictions:
              </p>
              <p className="text-[#1a1a1a] capitalize">
                {reservationData.dietaryRestrictions}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Premium Options Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0dcd5] hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-6 pb-4 border-b-2 border-[#e0dcd5]">
          <span className="text-3xl mr-3"></span>
          <h3 className="text-2xl font-bold text-[#1a1a1a]">
            Premium Selections
          </h3>
        </div>
        <div className="space-y-3">
          {reservationData.wineSelection && (
            <div className="flex justify-between items-center p-3 bg-[#f9f7f4] rounded-lg">
              <div>
                <p className="text-[#1a1a1a] font-semibold">
                  Wine Pairing Selection
                </p>
                <p className="text-[#5c5a57] text-sm">
                  Expert sommelier pairing included
                </p>
              </div>
              <p className="text-[#d4af37] font-bold text-lg">+$45</p>
            </div>
          )}
          {reservationData.specialRequests && (
            <div className="p-4 bg-[#f8f5f0] rounded-lg border-l-4 border-[#d4af37]">
              <p className="text-[#5c5a57] text-sm font-semibold mb-2">
                Special Requests:
              </p>
              <p className="text-[#1a1a1a]">
                {reservationData.specialRequests}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-linear-to-r from-[#f8f5f0] via-white to-[#f8f5f0] p-8 rounded-2xl shadow-lg border-2 border-[#e0dcd5]">
        <div className="space-y-3">
          {selectedMenuItems.length > 0 && (
            <div className="flex justify-between items-center pb-3 border-b-2 border-[#e0dcd5]">
              <p className="text-[#5c5a57] font-semibold">Menu Items Total:</p>
              <p className="text-[#1a1a1a] font-bold">${totalMenuPrice}</p>
            </div>
          )}
          {reservationData.wineSelection && (
            <div className="flex justify-between items-center pb-3 border-b-2 border-[#e0dcd5]">
              <p className="text-[#5c5a57] font-semibold">Wine Pairing:</p>
              <p className="text-[#1a1a1a] font-bold">${winePrice}</p>
            </div>
          )}
          <div className="flex justify-between items-center pt-2">
            <p className="text-[#1a1a1a] font-bold text-lg">Estimated Total:</p>
            <p className="text-[#d4af37] font-bold text-3xl">${totalPrice}</p>
          </div>
          <p className="text-[#5c5a57] text-xs mt-4 italic">
            *Final price may vary based on current menu pricing
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={onNewReservation}
          className="flex-1 px-8 py-4 bg-white border-2 border-[#d4af37] text-[#d4af37]
          font-bold text-lg rounded-xl hover:bg-[#f8f5f0] transition-all duration-300"
        >
          Make Another Reservation
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex-1 px-8 py-4 bg-linear-to-r from-[#d4af37] to-[#f5d76e]
          text-[#1a1a1a] font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>

      {/* Info Box */}
      <div className="bg-[#f8f5f0] p-6 rounded-2xl border-l-4 border-[#d4af37]">
        <p className="text-[#5c5a57] text-sm leading-relaxed">
          <span className="font-semibold text-[#1a1a1a]">
            Confirmation Email:
          </span>{" "}
          We've sent a detailed confirmation to your email. Please check your
          inbox and spam folder. You can modify your reservation up to 24 hours
          before your reservation time by contacting us.
        </p>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
