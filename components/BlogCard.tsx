import Image from "next/image";

type BlogCardProps = {
  image: string;
  title: string;
  date: string;
};

export default function BlogCard({ image, title, date }: BlogCardProps) {
  return (
    <div className="news-card relative h-[400px] shadow-xl overflow-hidden rounded-xl group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{date}</p>
      </div>
    </div>
  );
}
