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

  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,

  // ⭐ On laisse color au cas où
  color: 0xffffff,

  points: 10.0,
  maxDistance: 15.0,
  spacing: 8.0,
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
