import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from './SectionReveal';
const FAQS = [
{
  q: '¿La consulta tiene costo?',
  a: 'La primera consulta es sin cargo y permite analizar su situación y orientarlo sobre los pasos a seguir.'
},
{
  q: '¿Qué documentación necesito llevar?',
  a: 'Depende del caso. Durante el primer contacto le indicaremos exactamente qué documentación es conveniente presentar.'
},
{
  q: '¿Cuánto tiempo demora un reclamo?',
  a: 'Cada situación es distinta. Luego de analizar el caso podremos brindarle una estimación más precisa.'
},
{
  q: '¿Atienden accidentes de tránsito?',
  a: 'Sí. Representamos a personas involucradas en accidentes de autos, motos y peatones.'
},
{
  q: '¿Atienden reclamos laborales?',
  a: 'Sí. Asesoramos en despidos, trabajo no registrado, diferencias salariales, accidentes laborales y reclamos contra ART.'
},
{
  q: '¿La consulta es confidencial?',
  a: 'Sí. Toda la información compartida está protegida por el secreto profesional.'
}];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionReveal className="text-center">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
            Resolvemos sus dudas
          </h2>
        </SectionReveal>

        <div className="mt-12 divide-y divide-gray-100 border-y border-gray-100">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <SectionReveal key={item.q} delay={i * 0.04}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    
                    <span className="text-[17px] font-600 text-petrol">
                      {item.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cloud text-petrol">
                      {isOpen ?
                      <MinusIcon className="h-4 w-4" /> :

                      <PlusIcon className="h-4 w-4" />
                      }
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="overflow-hidden">
                    
                      <p className="pb-5 pr-12 text-[15px] leading-relaxed text-bluegray">
                        {item.a}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </SectionReveal>);

          })}
        </div>
      </div>
    </section>);

}