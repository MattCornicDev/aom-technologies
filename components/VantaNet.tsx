"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";


export default function VantaNet() {
  const ref = useRef(null);
  const [vanta, setVanta] = useState<any>(null);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        NET({
  el: ref.current,
  THREE,
  color: 0x007ee5,          // bleu électrique plus intense
  backgroundColor: 0x0a0a0a, // fond sombre comme ton image
  points: 13.0,             // GROS POINTS LUMINEUX
  maxDistance: 20.0,        // LIGNES PLUS LONGUES
  spacing: 11.0,            // RÉSEAU TRÈS DENSE
  showDots: false,
})

      );
    }
    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return <div ref={ref} className="w-full h-full"></div>;
}
