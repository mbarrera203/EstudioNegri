import React from 'react';
import { CarIcon, BriefcaseIcon, ShieldPlusIcon, GavelIcon } from 'lucide-react';
import { SectionReveal } from './SectionReveal';
const SERVICES = [
{
  icon: CarIcon,
  title: 'Accidentes de tránsito',
  items: [
  'Choques de autos',
  'Accidentes de moto',
  'Peatones atropellados',
  'Reclamos contra aseguradoras']

},
{
  icon: BriefcaseIcon,
  title: 'Derecho laboral',
  items: [
  'Despidos',
  'Trabajo en negro',
  'Diferencias salariales',
  'Indemnizaciones']

},
{
  icon: ShieldPlusIcon,
  title: 'Accidentes laborales y ART',
  items: [
  'Accidentes de trabajo',
  'Enfermedades profesionales',
  'Reclamos contra ART',
  'Incapacidad laboral']

},
{
  icon: GavelIcon,
  title: 'Daños y perjuicios',
  items: [
  'Daño moral',
  'Incapacidad sobreviniente',
  'Reclamos indemnizatorios']

}];

export function Servicios() {
  return (
    <section id="servicios" className="w-full bg-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
            Áreas de práctica
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
            ¿Cómo podemos ayudarlo?
          </h2>
          <p className="mt-4 text-lg text-bluegray leading-relaxed">
            Asesoramiento legal especializado para acompañarlo y representarlo
            en cada tipo de reclamo.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) =>
          <SectionReveal
            key={s.title}
            as="article"
            delay={i * 0.07}
            className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm shadow-petrol/5 border border-transparent transition-all duration-300 hover:border-petrol/15 hover:shadow-xl hover:shadow-petrol/10">
            
              <span className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-xl bg-petrol text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-600 text-petrol">{s.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.items.map((item) =>
              <li
                key={item}
                className="flex items-start gap-2 text-[15px] text-bluegray">
                
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol/50" />
                    {item}
                  </li>
              )}
              </ul>
            </SectionReveal>
          )}
        </div>
      </div>
    </section>);

}