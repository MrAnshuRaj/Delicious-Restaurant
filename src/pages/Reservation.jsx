import { useState } from "react";
import ReservationHero from "../components/Reservation/ReservationHero";
import ReservationBenefits from "../components/Reservation/ReservationBenefits";
import ReservationForm from "../components/Reservation/ReservationForm";
import ReservationConfirmation from "../components/Reservation/ReservationConfirmation";

const Reservation = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
    setIsConfirmed(true);
    // Here you would typically send the data to your backend
    console.log("Reservation submitted:", formData);
  };

  const handleNewReservation = () => {
    setIsConfirmed(false);
    setSubmittedData(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <ReservationHero />
      {isConfirmed ? (
        <section className="py-16 md:py-24 bg-[#f8f5f0]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <ReservationConfirmation
              reservationData={submittedData}
              onNewReservation={handleNewReservation}
            />
          </div>
        </section>
      ) : (
        <>
          <ReservationBenefits />
          <section className="py-16 md:py-24 bg-white border-b border-[#e0dcd5]">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                  Make Your Reservation
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-[#d4af37] to-[#f5d76e] mx-auto mb-4"></div>
                <p className="text-[#5c5a57] text-lg max-w-2xl mx-auto">
                  Reserve your table and enjoy an unforgettable dining
                  experience
                </p>
              </div>
              <ReservationForm onSubmit={handleFormSubmit} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Reservation;
