import React from 'react';
import {
  AwardIcon,
  UserCheckIcon,
  ZapIcon,
  ClipboardCheckIcon } from
'lucide-react';
import { SectionReveal } from './SectionReveal';
const REASONS = [
{
  icon: AwardIcon,
  title: 'Más de 18 años de experiencia',
  text: 'Trayectoria sólida defendiendo los derechos de cada cliente.'
},
{
  icon: UserCheckIcon,
  title: 'Atención personalizada',
  text: 'Cada caso es único y recibe el trato y la dedicación que merece.'
},
{
  icon: ZapIcon,
  title: 'Respuesta rápida',
  text: 'Lo orientamos con agilidad para que no pierda tiempo ni derechos.'
},
{
  icon: ClipboardCheckIcon,
  title: 'Seguimiento integral',
  text: 'Acompañamiento completo de su caso, de principio a fin.'
}];

export function PorQueElegirnos() {
  return (
    <section id="por-que" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
            Nuestro compromiso
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
            ¿Por qué elegirnos?
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) =>
          <SectionReveal
            key={r.title}
            delay={i * 0.07}
            className="rounded-2xl border border-gray-100 p-7 transition-colors hover:border-petrol/20">
            
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cloud text-petrol">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-600 text-petrol">{r.title}</h3>
              <p className="mt-2 text-[15px] text-bluegray leading-relaxed">
                {r.text}
              </p>
            </SectionReveal>
          )}
        </div>
      </div>
    </section>);

}