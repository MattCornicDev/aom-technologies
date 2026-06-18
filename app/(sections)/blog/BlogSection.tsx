"use client";
import BlogCard from "@/components/BlogCard";

export default function BlogSection() {
  const posts = [
    {
      image: "/images/borne.webp",
      title: "Nouvelle borne installée à Valenciennes",
      date: "12 Juin 2024",
    },
    {
      image: "/images/office.webp",
      title: "Formation IRVE niveau 2 — session complète",
      date: "3 Mai 2024",
    },
    {
      image: "/images/fibre.webp",
      title: "Déploiement fibre optique — nouveau chantier",
      date: "28 Avril 2024",
    },
  ];

  return (
    <section
      id="blog"
      className="
        section-news 
        py-28 md:py-32 
        bg-gradient-to-br 
        from-[#fa06db] 
        via-[#a6ede3] 
        to-[#0059ff]
        bg-[length:200%_200%]
        animate-gradientFlow
      "
    >
      <div className="container mx-auto px-6 md:px-12">
        <h3 className="uppercase text-white text-3xl md:text-4xl font-semibold text-center mb-20">
          Actualités
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
