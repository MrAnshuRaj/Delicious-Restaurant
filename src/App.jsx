import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import ScrollToTop from "./components/ScrollToTop";
import Events from "./components/Events/Events";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Menu Page */}
        <Route path="/menu" element={<Menu />} />
        {/* Events Page */}
        <Route path="/events" element={<Events />} />
        {/* Testimonials Page */}
        <Route path="/testimonials" element={<Testimonials />} />
        {/* FAQ Page */}
        <Route path="/faq" element={<FAQ />} />
        {/* Careers Page */}
        <Route path="/careers" element={<Careers />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* Privacy Policy Page */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        {/* Terms Page */}
        <Route path="/terms" element={<Terms />} />
        import Events from "./pages/Events"; import FAQ from "./pages/FAQ";
        import Careers from "./pages/Careers"; import PrivacyPolicy from
        "./pages/PrivacyPolicy"; import Terms from "./pages/Terms";
        {/* Reservation Page */}
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
