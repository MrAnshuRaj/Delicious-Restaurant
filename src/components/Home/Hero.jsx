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
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 1.1;

      // Progress: 0 → 1
      const progress = Math.min(scrollY / heroHeight, 1);

      /* BACKGROUND (slowest) */
      bgRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;

      /* MIDGROUND */
      midRef.current.style.transform = `translateY(${scrollY * 0.16}px)`;

      /* BURGER (foreground, overtakes text) */
      const burgerScale = 1.45 + progress * 1.5;
      const burgerY = scrollY * 0.14;

      burgerRef.current.style.transform = `
        translate(-50%, ${burgerY}px)
        scale(${burgerScale})
      `;

      /* TEXT (scene-based parallax, NOT fixed) */
      const textY = progress * -140; // moves up
      const textScale = 1 - progress * 0.15;
      const textOpacity = 1 - progress * 1.1;

      textRef.current.style.transform = `
        translate(-50%, calc(-50% + ${textY}px))
        scale(${textScale})
      `;
      textRef.current.style.opacity = Math.max(textOpacity, 0);
    };

    // Run once to avoid jump on reload
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO SCENE */}
      <section className="relative h-[115vh] overflow-hidden bg-black">
        {/* BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* MIDGROUND */}
        <img
          ref={midRef}
          src={mid}
          alt=""
          className="absolute bottom-0 w-full will-change-transform z-10"
        />

        {/* TEXT (MID LAYER — BEHIND BURGER) */}
        <div
          ref={textRef}
          className="
            absolute
            top-[38%]
            left-1/2
            z-20
            text-center
            pointer-events-none
            will-change-transform
          "
          style={{
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1,
          }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Experience the{" "}
            <span className="text-[#d4af37]">Depth of Flavor</span>
          </h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A culinary journey inspired by tradition and elevated by craft.
          </p> */}
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
            will-change-transform
            drop-shadow-[0_80px_120px_rgba(0,0,0,0.6)]
          "
          style={{
            transform: "translate(-50%, 0) scale(0.65)",
          }}
        />

        {/* FADE INTO NEXT SECTION */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#f2efe9] z-40" />
      </section>

      {/* NEXT SECTION */}
      <section className="bg-[#f2efe9] py-5" />
    </>
  );
};

export default Hero;
