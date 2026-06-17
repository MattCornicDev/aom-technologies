"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <h3 className="contact text-[#007de4] text-2xl md:text-3xl font-extrabold uppercase mb-16">
          Contact
        </h3>

        {/* Contact items */}
        <div className="space-y-10 contact-details">

          {/* Adresse */}
          <div className="flex items-start gap-6">
            <div className="contact-media-left min-w-[100px]">
              <FaMapMarkerAlt className="text-[#007de4] text-3xl" />
            </div>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              123 Rue de l’Innovation<br />
              59220 Denain<br />
              Hauts-de-France
            </p>
          </div>

          {/* Téléphone */}
          <div className="flex items-start gap-6">
            <div className="contact-media-left min-w-[100px]">
              <FaPhoneAlt className="text-[#007de4] text-3xl" />
            </div>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              +33 6 12 34 56 78
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-6">
            <div className="contact-media-left min-w-[100px]">
              <FaEnvelope className="text-[#007de4] text-3xl" />
            </div>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              contact@aom-tech.fr
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
