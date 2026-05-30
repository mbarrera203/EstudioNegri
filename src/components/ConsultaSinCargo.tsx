import React from 'react';
import { CheckCircle2Icon, MessageCircleIcon } from 'lucide-react';
import { SectionReveal } from './SectionReveal';
import { WHATSAPP_LINK } from '../lib/constants';
const BENEFITS = [
'Evaluación preliminar del caso',
'Orientación legal clara y sencilla',
'Atención personalizada',
'Sin compromiso de contratación'];

export function ConsultaSinCargo() {
  return (
    <section className="w-full bg-petrol py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionReveal>
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-white/60">
              Consulta inicial sin cargo
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-white tracking-tight">
              Primera consulta sin cargo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80 max-w-xl">
              Analizamos su situación, respondemos sus dudas y le indicamos
              cuáles son sus opciones legales. La consulta inicial es
              confidencial y sin compromiso.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-600 text-petrol hover:bg-cloud transition-colors">
              
              <MessageCircleIcon className="h-5 w-5" />
              Solicitar consulta por WhatsApp
            </a>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) =>
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl bg-white/[0.06] border border-white/10 p-5">
                
                  <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="text-[15px] font-500 text-white">{b}</span>
                </li>
              )}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>);

}