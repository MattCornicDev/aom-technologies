"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      console.error("Erreur de formulaire contact :", data.error);
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-12 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-4">

        <h3 className="text-[#007de4] text-2xl md:text-3xl font-extrabold uppercase mb-10">
          Contact
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8">

          {/* FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Envoyez-nous un message
            </h4>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* Nom */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="peer w-full px-3 py-3 text-[15px] text-gray-900 border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30 transition"
                  placeholder=" "
                  required
                />
                <label className="absolute left-3 top-3 text-gray-500 text-[14px] pointer-events-none 
                  transition-all duration-200 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
                  peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#007de4]">
                  Votre nom
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="peer w-full px-3 py-3 text-[15px] text-gray-900 border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30 transition"
                  placeholder=" "
                  required
                />
                <label className="absolute left-3 top-3 text-gray-500 text-[14px] pointer-events-none 
                  transition-all duration-200 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
                  peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#007de4]">
                  Votre email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  className="peer w-full px-3 py-3 text-[15px] text-gray-900 border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30 transition resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label className="absolute left-3 top-3 text-gray-500 text-[14px] pointer-events-none 
                  transition-all duration-200 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
                  peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#007de4]">
                  Votre message
                </label>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#007de4] text-white py-3 rounded-lg text-[15px] font-semibold 
                hover:bg-[#0069c7] transition shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>

              <a
                href="/irve#devis"
                className="block w-full rounded-lg border border-[#007de4] py-3 text-center text-[15px] font-semibold text-[#007de4] transition hover:bg-[#007de4] hover:text-white"
              >
                Demander un devis
              </a>

              {/* Messages */}
              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  ✔ Votre message a bien été envoyé.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  ✖ Une erreur est survenue.
                </p>
              )}

            </form>
          </div>

          {/* ASIDE */}
          <aside className="rounded-xl bg-white p-2 shadow-md border border-gray-200">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Localisation
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-2">
              AOM Technologies & Services
            </h4>

            <div className="mt-5 w-full h-[260px] rounded-lg overflow-hidden border border-gray-300">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.6515268823828!2d3.3393252999999996!3d50.324812599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a67a78d79f803df%3A0x47473cdb63fbae1!2sAOM%20TECHNOLOGIES%20%26%20SERVICES!5e1!3m2!1sfr!2sfr!4v1784220460855!5m2!1sfr!2sfr"
              ></iframe>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
