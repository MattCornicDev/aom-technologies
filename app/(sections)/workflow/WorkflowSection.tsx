"use client";
import { motion } from "framer-motion";
import { FaTools, FaPlug, FaCheckCircle } from "react-icons/fa";

export default function WorkflowSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pop = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="
        relative
        py-28 md:py-32
        bg-gradient-to-br
        from-[#000814]
        via-[#001d3d]
        to-[#007ee5]
        bg-[length:200%_200%]
        animate-gradientFlow
        overflow-hidden
      "
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Wrapper interne pour Framer Motion */}
        <div className="relative z-10">

          {/* Heading */}
          <motion.header
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20 text-center"
          >
            <h3 className="uppercase text-[#007ee5] text-3xl md:text-4xl font-extrabold tracking-wide">
              Notre workflow
            </h3>
            <p className="text-gray-300 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Un processus clair, structuré et maîtrisé pour garantir la qualité de chaque intervention.
            </p>
          </motion.header>

          {/* Steps */}
          <div className="space-y-20">

            {/* Step 1 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-6"
            >
              <motion.div
                variants={pop}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-[#007ee5]"
              >
                <FaTools className="text-[#007ee5] text-4xl" />
              </motion.div>

              <div>
                <h4 className="text-[#007ee5] text-xl font-semibold capitalize mb-2">
                  Analyse & préparation
                </h4>
                <p className="text-gray-300 text-[16px] leading-relaxed">
                  Étude complète du projet, analyse des besoins, faisabilité technique et planification des étapes clés.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-6"
            >
              <motion.div
                variants={pop}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-[#007ee5]"
              >
                <FaPlug className="text-[#007ee5] text-4xl" />
              </motion.div>

              <div>
                <h4 className="text-[#007ee5] text-xl font-semibold capitalize mb-2">
                  Installation & déploiement
                </h4>
                <p className="text-gray-300 text-[16px] leading-relaxed">
                  Mise en place des équipements, raccordements, configuration et tests de conformité.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-6"
            >
              <motion.div
                variants={pop}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-[#007ee5]"
              >
                <FaCheckCircle className="text-[#007ee5] text-4xl" />
              </motion.div>

              <div>
                <h4 className="text-[#007ee5] text-xl font-semibold capitalize mb-2">
                  Validation & maintenance
                </h4>
                <p className="text-gray-300 text-[16px] leading-relaxed">
                  Vérification finale, remise du projet, suivi, maintenance et accompagnement personnalisé.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
