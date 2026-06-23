"use client";
import { FaBolt, FaWifi, FaLeaf } from "react-icons/fa";

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="bg-[#f4f4f4] py-28 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h4 className="uppercase text-[#007ee5] text-2xl md:text-3xl font-semibold">
            Nos expertises
          </h4>
          <h5 className="text-[#007ee5] text-xl md:text-2xl font-light mt-4">
            Des solutions adaptées à vos besoins
          </h5>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-6 feature-with-icon">
            <div className="w-16 h-16 flex items-center justify-center border border-[#007ee5] rounded-full">
              <FaBolt className="text-[#007ee5] text-4xl" />
            </div>
            <div>
              <h6 className="text-[#007ee5] text-xl font-semibold mb-2">
                Électricité générale
              </h6>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                Installation, maintenance et dépannage pour particuliers,
                professionnels et collectivités.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-6 feature-with-icon">
            <div className="w-16 h-16 flex items-center justify-center border border-[#007ee5] rounded-full">
              <FaWifi className="text-[#007ee5] text-4xl" />
            </div>
            <div>
              <h6 className="text-[#007ee5] text-xl font-semibold mb-2">
                Télécommunications & Fibre
              </h6>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                Déploiement, maintenance, raccordement et gestion de réseaux fibre optique
                et télécom.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-6 feature-with-icon">
            <div className="w-16 h-16 flex items-center justify-center border border-[#007ee5] rounded-full">
              <FaLeaf className="text-[#007ee5] text-4xl" />
            </div>
            <div>
              <h6 className="text-[#007ee5] text-xl font-semibold mb-2">
                Énergies renouvelables
              </h6>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                Solutions durables : IRVE, photovoltaïque, bornes de recharge
                et infrastructures vertes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
