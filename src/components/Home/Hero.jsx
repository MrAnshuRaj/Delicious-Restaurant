import { useEffect, useRef } from "react";

import bg from "../../assets/bg.png";
import mid from "../../assets/mid.png";
import burger from "../../assets/fore.png";

const Hero = () => {
  const bgRef = useRef(null);
  const midRef = useRef(null);
  const burgerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      const heroHeight = window.innerHeight * 1.2;

      // Clamp progress between 0–1
      const progress = Math.min(scroll / heroHeight, 1);

      /* BACKGROUND */
      bgRef.current.style.transform = `translateY(${scroll * 0.08}px)`;

      /* MID */
      midRef.current.style.transform = `translateY(${scroll * 0.15}px)`;

      /* BURGER – smooth growth + slight vertical move */
      const burgerScale = 0.7 + progress * 0.6;
      const burgerY = scroll * 0.12;

      burgerRef.current.style.transform = `
        translate(-50%, ${burgerY}px)
        scale(${burgerScale})
      `;

      /* TEXT – centered → moves up → fades → disappears */
      const textMove = progress * -120;
      const textOpacity = 1 - progress * 1.3;

      textRef.current.style.transform = `
        translate(-50%, calc(-50% + ${textMove}px))
      `;
      textRef.current.style.opacity = Math.max(textOpacity, 0);

      // Hide text completely after hero
      if (progress >= 0.9) {
        textRef.current.style.display = "none";
      } else {
        textRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[120vh] overflow-hidden bg-black">
        {/* BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* MID LAYER */}
        <img
          ref={midRef}
          src={mid}
          alt=""
          className="absolute bottom-0 w-full will-change-transform z-10"
        />
        {/* TEXT LAYER (STABLE CENTERED) */}
        <div
          ref={textRef}
          className="
            fixed
            top-1/2
            left-1/2
            z-20
            text-center
            pointer-events-none
            will-change-transform
          "
          style={{
            transform: "translate(-50%, calc(-50% + var(--text-offset, 0px)))",
            opacity: 1,
          }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Experience the{" "}
            <span className="text-[#d4af37]">Depth of Flavor</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A culinary journey inspired by tradition and elevated by craft.
          </p>
        </div>

        {/* BURGER (FRONT) */}
        <img
          ref={burgerRef}
          src={burger}
          alt="Signature Burger"
          className="
            absolute
            left-1/2
            bottom-[-40px]
            w-[900px]
            max-w-none
            z-30
            pointer-events-none
            drop-shadow-[0_80px_120px_rgba(0,0,0,0.6)]
            will-change-transform
          "
          style={{
            transform: "translate(-50%, 0) scale(0.7)",
          }}
        />

        {/* FADE TO NEXT SECTION */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#f2efe9] z-40" />
      </section>

      {/* NEXT SECTION */}
      <section className="bg-[#f2efe9] py-32" />
    </>
  );
};

export default Hero;
