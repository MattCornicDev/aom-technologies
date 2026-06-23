"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative py-28 md:py-32 
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/images/subscribe.webp')" }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0"></div>

      <div className="relative container mx-auto px-6 md:px-12">

        {/* Heading */}
        <h3 className="text-[#007de4] text-2xl md:text-3xl font-extrabold uppercase mb-16 text-center">
          Contactez AOM Technologies & Services
        </h3>

        {/* FORMULAIRE PREMIUM */}
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-100">

          <h4 className="text-[18px] font-semibold text-gray-800 mb-6">
            Envoyez-nous un message
          </h4>

          <form className="space-y-6">

            {/* Champ Nom */}
            <div className="relative">
              <input
                type="text"
                id="name"
                className="
                  peer w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30
                  transition
                "
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="
                  absolute left-4 top-3 text-gray-500 text-[14px] pointer-events-none 
                  transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
                  peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#007de4] bg-white px-1
                "
              >
                Votre nom
              </label>
            </div>

            {/* Champ Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                className="
                  peer w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30
                  transition
                "
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="
                  absolute left-4 top-3 text-gray-500 text-[14px] pointer-events-none 
                  transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
                  peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#007de4] bg-white px-1
                "
              >
                Votre email
              </label>
            </div>

            {/* Champ Message */}
            <div className="relative">
              <textarea
                id="message"
                rows={4}
                className="
                  peer w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30
                  transition resize-none
                "
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="
                  absolute left-4 top-3 text-gray-500 text-[14px] pointer-events-none 
                  transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
                  peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#007de4] bg-white px-1
                "
              >
                Votre message
              </label>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="
                w-full bg-[#e0720b] text-white py-3 rounded-lg text-[15px] font-semibold 
                hover:bg-[#f0933c] transition shadow-md hover:shadow-lg
              "
            >
              Envoyer
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
