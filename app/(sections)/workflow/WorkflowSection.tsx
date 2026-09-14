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
        from-[#000816]
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
              Notre process
            </h3>
            <p className="text-gray-300 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Un processus clair, structuré et maîtrisé pour garantir la qualité de chaque intervention.
            </p>
          </motion.header>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl space-y-16 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-0.5 before:bg-[linear-gradient(to_bottom,transparent,#007ee5_20%,#7dd3fc_50%,#007ee5_80%,transparent)] before:bg-[length:100%_220%] before:animate-timelinePulse before:shadow-[0_0_14px_rgba(0,126,229,0.7)] md:space-y-0 md:before:bottom-16 md:before:left-1/2 md:before:top-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16 md:pb-20"
            >
              <div className="flex items-center gap-6 md:justify-end md:text-right">
                <div className="order-2 md:order-1 md:max-w-md">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">01 / Préparer</span>
                  <h4 className="mb-2 mt-2 text-xl font-semibold text-[#007ee5]">Analyse & préparation</h4>
                  <p className="text-[16px] leading-relaxed text-gray-300">
                    Étude complète du projet, analyse des besoins, faisabilité technique et planification des étapes clés.
                  </p>
                </div>
                <motion.div variants={pop} style={{ animationDelay: "0s" }} className="animate-workflowStepGlow z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#007ee5] bg-white shadow-lg md:order-2">
                  <FaTools className="animate-workflowIconGlow text-2xl text-[#007ee5]" style={{ animationDelay: "0s" }} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16 md:pb-20"
            >
              <div className="flex items-center gap-6 md:col-start-2">
                <motion.div variants={pop} style={{ animationDelay: "2s" }} className="animate-workflowStepGlow z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#007ee5] bg-white shadow-lg">
                  <FaPlug className="animate-workflowIconGlow text-2xl text-[#007ee5]" style={{ animationDelay: "2s" }} />
                </motion.div>
                <div className="md:max-w-md">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">02 / Déployer</span>
                  <h4 className="mb-2 mt-2 text-xl font-semibold text-[#007ee5]">Installation & déploiement</h4>
                  <p className="text-[16px] leading-relaxed text-gray-300">
                    Mise en place des équipements, raccordements, mise en service, configuration et tests de conformité.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16"
            >
              <div className="flex items-center gap-6 md:justify-end md:text-right">
                <div className="order-2 md:order-1 md:max-w-md">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">03 / Pérenniser</span>
                  <h4 className="mb-2 mt-2 text-xl font-semibold text-[#007ee5]">Validation & maintenance</h4>
                  <p className="text-[16px] leading-relaxed text-gray-300">
                    Vérification finale, remise du projet, maintenance et accompagnement personnalisé.
                  </p>
                </div>
                <motion.div variants={pop} style={{ animationDelay: "4s" }} className="animate-workflowStepGlow z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#007ee5] bg-white shadow-lg md:order-2">
                  <FaCheckCircle className="animate-workflowIconGlow text-2xl text-[#007ee5]" style={{ animationDelay: "4s" }} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
