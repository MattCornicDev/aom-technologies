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

        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        points: 8.0,        // ↓ moins de points = réseau plus aéré
        maxDistance: 20.0,  // ↑ lignes plus longues
        spacing: 10.0,      // ↑ espace entre les lignes

        showDots: true,

        backgroundColor: 0x000000,
        backgroundAlpha: 0.0,
      });

      // Patch couleur + vertexColors
      effect.scene.traverse((obj: any) => {
        if (obj.material) {
          if (obj.material.vertexColors === undefined) {
            obj.material.vertexColors = false;
          }
          if (obj.material.color) {
            obj.material.color.set("#0099ff"); // bleu électrique
          }
        }
      });

      setVanta(effect);
    }

    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return <div ref={ref} className="w-full h-full"></div>;
}
