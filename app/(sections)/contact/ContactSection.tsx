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
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-24 bg-[#f7f7f7]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <h3 className="text-[#007de4] text-3xl font-extrabold uppercase mb-16 text-left">
          Contact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-12">

          {/* FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
            <h4 className="text-[18px] font-semibold text-gray-800 mb-6">
              Envoyez-nous un message
            </h4>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Nom */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="peer w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30 transition"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-3 text-gray-500 text-[14px] pointer-events-none 
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
                  className="peer w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30 transition"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-3 text-gray-500 text-[14px] pointer-events-none 
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
                  className="peer w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg 
                  focus:outline-none focus:border-[#007de4] focus:ring-2 focus:ring-[#007de4]/30 transition resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-500 text-[14px] pointer-events-none 
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

              {/* Messages */}
              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  ✔ Votre message a bien été envoyé.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  ✖ Une erreur est survenue. Réessayez plus tard.
                </p>
              )}

            </form>
          </div>

          {/* CONTACT INFO */}
          <aside className="rounded-2xl bg-white p-10 shadow-xl border border-gray-200">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Contact direct
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-2">
              AOM Technologies & Services
            </h4>

            <div className="mt-6 space-y-4 text-[15px] text-gray-700">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#007de4] text-lg" />
                <span>03 27 43 64 18</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-[#007de4] text-xl" />
                <span>07 67 85 95 81</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#007de4] text-lg" />
                <span>contact@aomtechnologies.com</span>
              </div>

              <div className="flex items-center gap-3 max-w-[260px]">
                <FaMapMarkerAlt className="text-[#007de4] text-lg" />
                <span>
                  Z.A des six Mariannes<br />
                  9 rue des entrepreneurs<br />
                  59124 Escaudain
                </span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
