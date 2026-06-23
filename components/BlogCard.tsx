import Image from "next/image";

type BlogCardProps = {
  image: string;
  title: string;
  date: string;
};

export default function BlogCard({ image, title, date }: BlogCardProps) {
  return (
   <div className="
  relative h-[600px] rounded-xl overflow-hidden group
  border border-transparent
  hover:border-[#ffffff]
  hover:shadow-[20px_0_20px_#000000]
  transition-all duration-500
">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-1">{date}</p>
      </div>
    </div>
  );
}
