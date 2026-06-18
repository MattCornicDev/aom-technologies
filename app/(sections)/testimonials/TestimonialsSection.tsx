"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section
      id="testimonials"
      className="
        testimonial-bg 
        py-28 
        md:py-32 
        bg-gradient-to-br 
        from-[#a3bf3a] 
        via-[#aeb78a] 
        via-[#4696d6] 
        to-[#007ee5]
      "
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Titre */}
        <p className="titre-temoignage text-white text-xl md:text-2xl font-semibold tracking-wide">
          ILS VOUS LE DIRONT MIEUX QUE NOUS
        </p>

        {/* Séparateur */}
        <hr className="section-devider border-t border-white w-24 mx-auto my-8" />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          
          {reviews.length > 0 ? (
            reviews.slice(0, 3).map((review, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col items-center">
                  
                  {/* Avatar Google */}
                  <Image
                    src={review.profile_photo_url || "/images/avatar1.png"}
                    alt={review.author_name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />

                  {/* Nom */}
                  <h5 className="client-name text-white uppercase tracking-widest text-xs">
                    {review.author_name}
                  </h5>

                  {/* Commentaire */}
                  <p className="testimonial-speech text-white italic mt-6 text-sm leading-relaxed">
                    <Image
                      src="/images/quate.png"
                      alt="quote"
                      width={24}
                      height={24}
                      className="inline-block mr-2 align-top"
                    />
                    {review.text}
                  </p>

                  {/* Note */}
                  <p className="text-yellow-300 mt-4">
                    {"⭐".repeat(review.rating)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-lg">Chargement des avis...</p>
          )}

        </div>
      </div>
    </section>
  );
}
