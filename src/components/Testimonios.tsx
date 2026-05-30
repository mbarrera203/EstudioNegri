import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { SectionReveal } from './SectionReveal';
const TESTIMONIALS = [
{
  quote:
  'Me acompañaron durante todo mi reclamo por accidente de tránsito y obtuve una resolución favorable. Siempre me explicaron cada paso con claridad.',
  name: 'Marcela G.',
  detail: 'Reclamo por accidente de tránsito'
},
{
  quote:
  'Excelente atención y rapidez para resolver mi problema laboral. Me sentí acompañado en todo momento y muy bien asesorado.',
  name: 'Diego R.',
  detail: 'Reclamo laboral'
},
{
  quote:
  'Después de mi accidente de trabajo no sabía cómo reclamar contra la ART. Gracias a su asesoramiento logré el reconocimiento de mis secuelas.',
  name: 'Laura P.',
  detail: 'Reclamo contra ART'
}];

export function Testimonios() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
            Testimonios
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
            Lo que dicen quienes confiaron en nosotros
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) =>
          <SectionReveal
            key={t.name}
            as="article"
            delay={i * 0.08}
            className="flex h-full flex-col rounded-2xl border border-gray-100 bg-cloud/50 p-7">
            
              <QuoteIcon className="h-8 w-8 text-petrol/25" />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-petrol/90">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-0.5">
                {Array.from({
                length: 5
              }).map((_, s) =>
              <StarIcon
                key={s}
                className="h-4 w-4 fill-petrol text-petrol" />

              )}
              </div>
              <div className="mt-3">
                <p className="text-sm font-600 text-petrol">{t.name}</p>
                <p className="text-xs text-bluegray">{t.detail}</p>
              </div>
            </SectionReveal>
          )}
        </div>
      </div>
    </section>);

}