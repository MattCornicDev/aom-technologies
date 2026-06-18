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
        <h3 className="text-[#007de4] text-2xl md:text-3xl font-extrabold uppercase mb-16">
          Contactez AOM Technologies & Services
        </h3>

        {/* GRID CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Adresse */}
          <div className="flex items-start gap-6">
            <FaMapMarkerAlt className="text-[#007de4] text-4xl" />
            <div>
              <h4 className="text-[16px] font-semibold text-gray-800 mb-2">Adresse</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Z.A des Six Mariannes<br />
                9 Rue des Entrepreneurs<br />
                59124 Escaudain
              </p>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex items-start gap-6">
            <FaPhoneAlt className="text-[#007de4] text-4xl" />
            <div>
              <h4 className="text-[16px] font-semibold text-gray-800 mb-2">Téléphone</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Mobile : <a href="tel:0767859581" className="text-[#007de4] font-semibold">07 67 85 95 81</a><br />
                Fixe : <a href="tel:0327436418" className="text-[#007de4] font-semibold">03 27 43 64 18</a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-6">
            <FaEnvelope className="text-[#007de4] text-4xl" />
            <div>
              <h4 className="text-[16px] font-semibold text-gray-800 mb-2">Email</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                <a href="mailto:contact@aomtechnologies.com" className="text-[#007de4] font-semibold">
                  contact@aomtechnologies.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="mailto:contact@aomtechnologies.com"
            className="inline-block bg-[#007de4] text-white px-10 py-4 rounded-md text-[14px] font-semibold uppercase tracking-wide hover:bg-[#0066c7] transition"
          >
            Envoyer un message
          </a>
        </div>

      </div>
    </section>
  );
}
