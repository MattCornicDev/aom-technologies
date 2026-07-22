"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Review = {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
};

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data: Review[]) => setReviews(data));
  }, []);

  return (
    <section id="testimonials" className="py-12 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h3 className="text-[#007de4] text-2xl md:text-3xl font-extrabold uppercase text-center">
          Témoignages clients
        </h3>
        <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
          Ils nous font confiance pour leurs installations électriques, réseaux et bornes IRVE.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {/* AVIS FIXES */}
          {[
            {
              author_name: "Jean‑Marc D.",
              text: "Installation IRVE impeccable, technicien très professionnel. Explications claires et travail propre.",
              rating: 5,
              profile_photo_url: "/images/avatars/avatar1.webp",
            },
            {
              author_name: "Sophie L.",
              text: "Travail rapide et soigné. AOM a su parfaitement répondre à nos besoins pour la fibre et le réseau.",
              rating: 5,
              profile_photo_url: "/images/avatars/avatar2.webp",
            },
            {
              author_name: "Entreprise Dufour",
              text: "Pose de bornes électriques pour notre parking salarié. Excellent accompagnement et suivi.",
              rating: 5,
              profile_photo_url: "/images/avatars/avatar3.webp",
            },
          ].map((review, i) => (
            <div
              key={`static-${i}`}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">

                <Image
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  width={70}
                  height={70}
                  className="rounded-full mb-3 object-cover"
                />

                <h5 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
                  {review.author_name}
                </h5>

                <p className="text-gray-600 italic mt-3 text-sm leading-relaxed">
                  <span className="text-[#007de4] text-xl mr-1">“</span>
                  {review.text}
                  <span className="text-[#007de4] text-xl ml-1">”</span>
                </p>

                <p className="text-yellow-400 mt-3 text-lg">
                  {"⭐".repeat(review.rating)}
                </p>
              </div>
            </div>
          ))}

          {/* AVIS GOOGLE */}
          {reviews.length > 0 &&
            reviews.slice(0, 3).map((review, i) => (
              <div
                key={`google-${i}`}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex flex-col items-center text-center">

                  <Image
                    src={review.profile_photo_url || "/images/avatars/default.webp"}
                    alt={review.author_name}
                    width={70}
                    height={70}
                    className="rounded-full mb-3 object-cover"
                  />

                  <h5 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
                    {review.author_name}
                  </h5>

                  <p className="text-gray-600 italic mt-3 text-sm leading-relaxed">
                    <span className="text-[#007de4] text-xl mr-1">“</span>
                    {review.text}
                    <span className="text-[#007de4] text-xl ml-1">”</span>
                  </p>

                  <p className="text-yellow-400 mt-3 text-lg">
                    {"⭐".repeat(review.rating)}
                  </p>
                </div>
              </div>
            ))}

          {/* Aucun avis Google */}
          {reviews.length === 0 && (
            <p className="text-gray-500 text-center col-span-full">
              Chargement des avis Google…
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
