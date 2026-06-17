"use client";
import { FaTools, FaPlug, FaCheckCircle } from "react-icons/fa";

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-28 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <header className="mb-20">
          <h3 className="uppercase text-[#007ee5] text-3xl md:text-4xl font-semibold">
            Notre workflow
          </h3>
        </header>

        {/* Steps */}
        <div className="space-y-12">
          
          {/* Step 1 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border border-[#007ee5] rounded-full">
              <FaTools className="text-[#007ee5] text-4xl" />
            </div>
            <div>
              <h4 className="text-[#007ee5] text-xl font-semibold capitalize mb-2">
                Analyse & préparation
              </h4>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                Étude complète du projet, analyse des besoins, faisabilité
                technique et planification des étapes clés.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border border-[#007ee5] rounded-full">
              <FaPlug className="text-[#007ee5] text-4xl" />
            </div>
            <div>
              <h4 className="text-[#007ee5] text-xl font-semibold capitalize mb-2">
                Installation & déploiement
              </h4>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                Mise en place des équipements, raccordements, configuration et
                tests de conformité.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border border-[#007ee5] rounded-full">
              <FaCheckCircle className="text-[#007ee5] text-4xl" />
            </div>
            <div>
              <h4 className="text-[#007ee5] text-xl font-semibold capitalize mb-2">
                Validation & maintenance
              </h4>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                Vérification finale, remise du projet, suivi, maintenance et
                accompagnement personnalisé.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
