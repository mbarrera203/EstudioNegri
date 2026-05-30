import { motion } from 'framer-motion';
import {
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  CarIcon,
  BriefcaseIcon,
  ShieldPlusIcon,
  GavelIcon } from
'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';
const HIGHLIGHTS = [
{
  icon: CarIcon,
  label: 'Accidentes de tránsito'
},
{
  icon: BriefcaseIcon,
  label: 'Reclamos laborales'
},
{
  icon: ShieldPlusIcon,
  label: 'Accidentes laborales y ART'
},
{
  icon: GavelIcon,
  label: 'Daños y perjuicios'
}];

const STATS = [
{
  value: '+18',
  label: 'años de experiencia'
},
{
  value: '100%',
  label: 'atención personalizada'
},
{
  value: 'Mendoza',
  label: 'asesoramiento local'
}];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-cloud pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
      
      {/* Subtle decorative accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-petrol/5" />
      
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-bluegray/5" />
      

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-petrol/15 bg-white px-4 py-1.5 text-xs font-600 uppercase tracking-[0.14em] text-petrol">
          
          <ShieldCheckIcon className="h-3.5 w-3.5" />
          Más de 18 años defendiendo sus derechos
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 font-serif text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] font-600 text-petrol tracking-tight">
          
          ¿Sufrió un accidente o tiene un problema laboral?
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-bluegray leading-relaxed">
          
          Reciba asesoramiento legal claro y profesional para defender sus
          derechos. Lo acompañamos en cada paso, con atención cercana y enfocada
          en resultados.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col sm:flex-row sm:justify-center gap-3">
          
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-petrol px-7 py-4 text-base font-600 text-white shadow-lg shadow-petrol/20 hover:bg-petrol-dark transition-colors">
            
            <MessageCircleIcon className="h-5 w-5" />
            Solicitar consulta por WhatsApp
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-petrol/25 bg-white px-7 py-4 text-base font-600 text-petrol hover:border-petrol transition-colors">
            
            <PhoneIcon className="h-5 w-5" />
            Contactar ahora
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-5 text-sm text-bluegray">
          Consulta inicial{' '}
          <span className="font-600 text-petrol">sin cargo</span> y
          confidencial.
        </motion.p>

        {/* Practice-area chips */}
        <motion.ul
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-2.5">
          
          {HIGHLIGHTS.map((h) =>
          <li
            key={h.label}
            className="inline-flex items-center gap-2 rounded-full border border-petrol/10 bg-white px-4 py-2 text-sm font-500 text-petrol">
            
              <h.icon className="h-4 w-4 text-bluegray" />
              {h.label}
            </li>
          )}
        </motion.ul>
      </motion.div>

      {/* Trust strip */}
      <motion.div
        initial={{
          opacity: 0,
          y: 24
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative mx-auto mt-14 max-w-3xl px-5 sm:px-8">
        
        <dl className="grid grid-cols-3 divide-x divide-petrol/10 rounded-2xl border border-petrol/10 bg-white py-6 shadow-sm shadow-petrol/5">
          {STATS.map((s) =>
          <div key={s.label} className="px-2 text-center sm:px-6">
              <dt className="font-serif text-2xl sm:text-3xl font-700 text-petrol leading-none">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-xs sm:text-[13px] text-bluegray">
                {s.label}
              </dd>
            </div>
          )}
        </dl>
      </motion.div>
    </section>);

}