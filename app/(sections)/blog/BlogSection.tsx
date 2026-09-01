"use client";
import BlogCard from "@/components/BlogCard";

export default function BlogSection() {
  const posts = [
    {
      image: "/images/borne.webp",
      title: "Nouvelle borne installée à Valenciennes",
      date: "",
    },
    {
      image: "/images/office.webp",
      title: "Centre de formation : IRVE P1/P2/P3...",
      date: "",
    },
    {
      image: "/images/fibre.webp",
      title: "Déploiement Raccordement et maintenance dans les hauts de France / Valenciennois / Amandinois / denaisis...",
      date: "",
    },
  ];

  return (
    <section
      id="blog"
      className="
        section-news 
        py-20 md:py-24 lg:py-32
        bg-gradient-to-br 
        from-[#ffffff] 
        via-[#a6ede3] 
        to-[#0059ff]
        bg-[length:200%_200%]
        animate-gradientFlow
      "
    >
      <div className="container mx-auto px-6 md:px-12">
        <h3 className="mb-12 text-center text-3xl font-semibold uppercase text-[#0059ff] md:mb-14 md:text-4xl lg:mb-20">
          Actualités
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {posts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
