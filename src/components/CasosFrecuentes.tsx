import React from 'react';
import {
  CarIcon,
  BikeIcon,
  HardHatIcon,
  FileTextIcon,
  AlertTriangleIcon,
  HeartPulseIcon,
  ArrowRightIcon } from
'lucide-react';
import { SectionReveal } from './SectionReveal';
import { WHATSAPP_LINK } from '../lib/constants';
const CASES = [
{
  icon: CarIcon,
  title: 'Accidente de tránsito',
  text: '¿Lo chocaron y el seguro no responde?'
},
{
  icon: BikeIcon,
  title: 'Accidente de moto',
  text: '¿Sufrió lesiones y no sabe cómo reclamar una indemnización?'
},
{
  icon: HardHatIcon,
  title: 'Accidente laboral',
  text: '¿Tuvo un accidente trabajando y la ART no reconoce todas sus secuelas?'
},
{
  icon: FileTextIcon,
  title: 'Despido',
  text: '¿Fue despedido y tiene dudas sobre su indemnización?'
},
{
  icon: AlertTriangleIcon,
  title: 'Trabajo no registrado',
  text: '¿Trabaja en negro o parcialmente registrado?'
},
{
  icon: HeartPulseIcon,
  title: 'Enfermedad profesional',
  text: '¿Su trabajo le provocó problemas físicos o de salud?'
}];

export function CasosFrecuentes() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
            Casos frecuentes
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
            ¿Se encuentra en alguna de estas situaciones?
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) =>
          <SectionReveal
            key={c.title}
            as="article"
            delay={i * 0.06}
            className="group rounded-2xl border border-gray-100 bg-cloud/60 p-7 transition-all duration-300 hover:bg-white hover:border-petrol/20 hover:shadow-xl hover:shadow-petrol/5">
            
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol/10 text-petrol transition-colors group-hover:bg-petrol group-hover:text-white">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-600 text-petrol">{c.title}</h3>
              <p className="mt-2 text-bluegray leading-relaxed">{c.text}</p>
            </SectionReveal>
          )}
        </div>

        <SectionReveal
          delay={0.1}
          className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-petrol px-6 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
          
          <p className="text-lg text-white/90 max-w-xl">
            Si se identifica con alguna de estas situaciones, podemos ayudarlo a
            evaluar su caso.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-600 text-petrol hover:bg-cloud transition-colors">
            
            Consultar ahora
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </SectionReveal>
      </div>
    </section>);

}