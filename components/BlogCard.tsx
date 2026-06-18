"use client";
import Image from "next/image";

export default function BlogCard({ image, title, date }) {
  return (
    <div className="news-card relative h-[400px] shadow-xl overflow-hidden rounded-xl group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
      />

      <div className="news-content absolute bottom-0 left-0 w-full h-[100px] bg-black/20 opacity-0 group-hover:opacity-100 group-hover:h-[120px] transition-all duration-700 p-4">
        <h4 className="news-title text-white text-lg font-semibold leading-tight">
          {title}
        </h4>
        <p className="news-date text-white text-xs mt-2">{date}</p>
      </div>
    </div>
  );
}
