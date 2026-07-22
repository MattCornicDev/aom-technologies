"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaNet() {
  const ref = useRef(null);
  const [vanta, setVanta] = useState<any>(null);

  useEffect(() => {
    if (!vanta) {
      const effect = NET({
        el: ref.current,
        THREE,

        // Ces options sont ignorées mais on les laisse
        pointsColor: "#007ee5",
        lineColor: "#007ee5",
        dotColor: "#007ee5",
        color: "#007ee5",

        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        points: 10.0,
        maxDistance: 15.0,
        spacing: 8.0,
        showDots: true,

        backgroundColor: 0x000000,
        backgroundAlpha: 0.0,
      });

      // ⭐ Hack THREE.js : on force la couleur des traits
      effect.scene.traverse((obj: any) => {
        if (obj.material && obj.material.color) {
          obj.material.color.set("#007ee5"); // bleu électrique
        }
      });

      setVanta(effect);
    }

    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return <div ref={ref} className="absolute inset-0 w-full h-full"></div>;
}
