import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { SectionReveal } from './SectionReveal';
const POINTS = [
'Asesoramiento legal especializado',
'Atención cercana y transparente',
'Enfoque orientado a resultados',
'Cobertura en toda Mendoza'];

export function SobreAbogado() {
  return (
    <section id="sobre" className="w-full bg-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-80px'
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="shrink-0">
            
            <div className="overflow-hidden rounded-full border-4 border-white shadow-lg shadow-petrol/10">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80"
                alt="Retrato profesional del abogado del estudio jurídico"
                className="h-32 w-32 sm:h-40 sm:w-40 object-cover"
                loading="lazy" />
              
            </div>
          </motion.div>

          <SectionReveal delay={0.1} className="text-center sm:text-left">
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
              Sobre el estudio
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
              Experiencia y compromiso al servicio de sus derechos
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bluegray">
              Con más de 18 años de trayectoria profesional, brindamos
              asesoramiento legal especializado en accidentes de tránsito,
              reclamos laborales, ART y daños y perjuicios, ofreciendo una
              atención cercana, transparente y enfocada en resultados.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) =>
              <li
                key={p}
                className="flex items-center justify-center gap-2.5 text-[15px] font-500 text-petrol sm:justify-start">
                
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-petrol/10">
                    <CheckIcon className="h-3 w-3 text-petrol" />
                  </span>
                  {p}
                </li>
              )}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>);

}