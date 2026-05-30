import React from 'react';
import { SectionReveal } from './SectionReveal';
const STEPS = [
{
  n: '01',
  title: 'Consulta inicial sin compromiso',
  text: 'Escuchamos su situación y respondemos sus primeras dudas, sin cargo.'
},
{
  n: '02',
  title: 'Análisis del caso',
  text: 'Estudiamos la documentación y evaluamos la viabilidad de su reclamo.'
},
{
  n: '03',
  title: 'Estrategia legal personalizada',
  text: 'Definimos el mejor camino para defender sus derechos e intereses.'
},
{
  n: '04',
  title: 'Representación y seguimiento',
  text: 'Lo representamos y acompañamos durante todo el proceso hasta la resolución.'
}];

export function Proceso() {
  return (
    <section id="proceso" className="w-full bg-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
            Proceso de trabajo
          </h2>
        </SectionReveal>

        <ol className="mt-14 relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-petrol/15" />
          
          {STEPS.map((s, i) =>
          <SectionReveal
            key={s.n}
            as="li"
            delay={i * 0.09}
            className="relative">
            
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-petrol font-serif text-lg font-600 text-white shadow-lg shadow-petrol/20">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-600 text-petrol">{s.title}</h3>
              <p className="mt-2 text-[15px] text-bluegray leading-relaxed">
                {s.text}
              </p>
            </SectionReveal>
          )}
        </ol>
      </div>
    </section>);

}