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

  // ⭐ Couleur du réseau (clé correcte pour ta version)
  pointsColor: 0xffffff,

  // ⭐ On laisse color au cas où
  color: 0xffffff,

  points: 13.0,
  maxDistance: 20.0,
  spacing: 11.0,
  showDots: true,

  backgroundColor: 0x000000,
  backgroundAlpha: 0.0,
})

      );
    }
    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return <div ref={ref} className="absolute inset-0 w-full h-full"></div>;
}
