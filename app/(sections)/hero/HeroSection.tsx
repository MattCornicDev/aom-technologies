"use client";

import { useEffect, useState } from "react";
import LogoWithRings from "@/components/LogoWithRings";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const animatedPhrase = "La technologie à votre service";

function StyledAom() {
  return (
    <span aria-label="AOM">
      A
      <span className="aom-letter-o" aria-hidden="true">
        <svg className="aom-wifi" viewBox="0 0 640 512" role="img" aria-label="Wi-Fi">
          <path
            className="aom-wifi-part aom-wifi-arc aom-wifi-arc-large"
            d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98z"
          />
          <circle className="aom-wifi-part aom-wifi-dot" cx="320" cy="416" r="64" />
          <path
            className="aom-wifi-part aom-wifi-arc aom-wifi-arc-small"
            d="M522.67 268.41c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"
          />
        </svg>
      </span>
      M
    </span>
  );
}

export default function HeroSection() {
  const [typedPhrase, setTypedPhrase] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let characterIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cycleTimeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      characterIndex += 1;
      setTypedPhrase(animatedPhrase.slice(0, characterIndex));

      if (characterIndex === animatedPhrase.length) {
        cycleTimeoutId = setTimeout(() => {
          setTypedPhrase("");
          characterIndex = 0;
          timeoutId = setTimeout(tick, 250);
        }, 5000);
        return;
      }

      timeoutId = setTimeout(tick, 90);
    };

    timeoutId = setTimeout(tick, 400);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(cycleTimeoutId);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative w-full h-screen flex items-center justify-start overflow-hidden
        bg-white
      "
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <LogoWithRings />
      </div>

      {/* Glow électrique bleu */}
      <div
        className="absolute inset-0"
        style={{
          background: "",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Texte */}
      <div
        className={`${orbitron.className} absolute inset-0 z-40 hidden flex-col items-center justify-center pointer-events-none lg:flex`}
      >
        <div className="w-full max-w-6xl px-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              className="
                text-[40px]
                lg:text-[110px]
                font-extrabold
                text-black
                leading-tight
                text-center
              "
            >
              <StyledAom />
              <span className="block whitespace-nowrap lg:text-[70px]">TECHNOLOGIES &amp; SERVICES</span>
            </h2>

            <div className="mt-8 max-w-xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-800">
                Nos expertises
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Électricité Générale <br /> IRVE (Infrastructure de Recharge pour Véhicules Électriques)
                <br />
                 E.N.R. Énergies Nouvelles Renouvelables <br />Résaux de Télcommunications / Fibre Optique
              </p>
            </div>
          </div>
        </div>

        <p className="absolute bottom-16 left-6 min-h-6 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#000000] sm:left-10 lg:left-16 lg:text-base">
          {typedPhrase}
          {cursorVisible && <span className="ml-1 inline-block">|</span>}
        </p>
      </div>

      {/* Effet électrique */}
      <div className="absolute inset-0 hidden h-full pointer-events-none z-0 lg:block">
       
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center px-6 pt-24 pb-12 md:px-12 lg:hidden">
        <div className="w-full max-w-sm md:max-w-2xl">
          <h1 className="-translate-y-8 text-center text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
            <StyledAom />
            <br />
            <span className="mt-6 block whitespace-nowrap text-2xl md:text-3xl">
              TECHNOLOGIES & SERVICES
            </span>
          </h1>
          <p className="mt-4 mb-6 min-h-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#007ee5] md:text-base">
            {typedPhrase}
            {cursorVisible && <span className="ml-1 inline-block">|</span>}
          </p>
          
          <p className="mt-5 mb-6 text-base leading-relaxed text-gray-600">
            
          </p>

          <div className="mt-8 border-l-2 border-[#007ee5] pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-800">
              Nos expertises
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Électricité Générale <br /> IRVE (Infrastructure de Recharge pour Véhicules Électriques)

              
               <br /> E.N.R. Énergies Nouvelles Renouvelables <br />Résaux de Télcommunications / Fibre Optique
            </p>
            
          </div>

        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>
    </section>
  );
}
