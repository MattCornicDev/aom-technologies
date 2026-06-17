"use client";
import Image from "next/image";

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="py-28 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">

        {/* Heading */}
        <h4 className="uppercase text-[#007ee5] text-2xl md:text-3xl font-semibold mb-16">
          Ils nous font confiance
        </h4>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-center">

          {/* Logo 1 */}
          <div className="flex justify-center">
            <Image
              src="/images/client1.png"
              alt="client 1"
              width={140}
              height={80}
              className="opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex justify-center">
            <Image
              src="/images/client2.png"
              alt="client 2"
              width={140}
              height={80}
              className="opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Logo 3 */}
          <div className="flex justify-center">
            <Image
              src="/images/client3.png"
              alt="client 3"
              width={140}
              height={80}
              className="opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Logo 4 */}
          <div className="flex justify-center">
            <Image
              src="/images/client4.png"
              alt="client 4"
              width={140}
              height={80}
              className="opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
