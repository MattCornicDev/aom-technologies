"use client";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="
        section-news 
        py-28 
        md:py-32 
        bg-gradient-to-br 
        from-[#fa06db] 
        via-[#a6ede3] 
        to-[#0059ff]
      "
    >
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <h3 className="uppercase text-white text-3xl md:text-4xl font-semibold text-center mb-20">
          Actualités
        </h3>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="news-card relative h-[400px] shadow-xl overflow-hidden rounded-xl group">
            <Image
              src="/images/blog1.jpg"
              alt="actualité 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
            />

            <div className="news-content absolute bottom-0 left-0 w-full h-[100px] bg-black/20 opacity-0 group-hover:opacity-100 group-hover:h-[120px] transition-all duration-700 p-4">
              <h4 className="news-title text-white text-lg font-semibold leading-tight">
                Nouvelle borne installée à Valenciennes
              </h4>
              <p className="news-date text-white text-xs mt-2">
                12 Juin 2024
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="news-card relative h-[400px] shadow-xl overflow-hidden rounded-xl group">
            <Image
              src="/images/blog2.jpg"
              alt="actualité 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
            />

            <div className="news-content absolute bottom-0 left-0 w-full h-[100px] bg-black/20 opacity-0 group-hover:opacity-100 group-hover:h-[120px] transition-all duration-700 p-4">
              <h4 className="news-title text-white text-lg font-semibold leading-tight">
                Formation IRVE niveau 2 — session complète
              </h4>
              <p className="news-date text-white text-xs mt-2">
                3 Mai 2024
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="news-card relative h-[400px] shadow-xl overflow-hidden rounded-xl group">
            <Image
              src="/images/blog3.jpg"
              alt="actualité 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
            />

            <div className="news-content absolute bottom-0 left-0 w-full h-[100px] bg-black/20 opacity-0 group-hover:opacity-100 group-hover:h-[120px] transition-all duration-700 p-4">
              <h4 className="news-title text-white text-lg font-semibold leading-tight">
                Déploiement fibre optique — nouveau chantier
              </h4>
              <p className="news-date text-white text-xs mt-2">
                28 Avril 2024
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
