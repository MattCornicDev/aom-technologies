"use client";
import Image from "next/image";

export default function TestimonialsSection() {
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
          
          {/* Témoignage 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src="/images/avatar1.png"
                alt="client"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h5 className="client-name text-white uppercase tracking-widest text-xs">
                Client satisfait
              </h5>
              <p className="testimonial-speech text-white italic mt-6 text-sm leading-relaxed">
                <Image
                  src="/images/quate.png"
                  alt="quote"
                  width={24}
                  height={24}
                  className="inline-block mr-2 align-top"
                />
                Je tiens à exprimer ma sincère gratitude envers l'équipe de AOM.
                Leur dévouement, leur professionnalisme et leur esprit d'équipe
                ont joué un rôle crucial dans notre réussite collective.
              </p>
            </div>
          </div>

          {/* Témoignage 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src="/images/avatar2.png"
                alt="client"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h5 className="client-name text-white uppercase tracking-widest text-xs">
                Clients satisfaits
              </h5>
              <p className="testimonial-speech text-white italic mt-6 text-sm leading-relaxed">
                <Image
                  src="/images/quate.png"
                  alt="quote"
                  width={24}
                  height={24}
                  className="inline-block mr-2 align-top"
                />
                Merci d'apporter votre excellence à chaque projet et de faire de
                notre équipe un environnement positif et productif.
              </p>
            </div>
          </div>

          {/* Témoignage 3 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <Image
                src="/images/avatar3.png"
                alt="client"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h5 className="client-name text-white uppercase tracking-widest text-xs">
                Client satisfait
              </h5>
              <p className="testimonial-speech text-white italic mt-6 text-sm leading-relaxed">
                <Image
                  src="/images/quate.png"
                  alt="quote"
                  width={24}
                  height={24}
                  className="inline-block mr-2 align-top"
                />
                I'm truly impressed with AOM team's dedication and expertise.
                Their commitment to excellence shines through in every project.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
