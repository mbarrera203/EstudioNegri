import React from 'react';
import {
  ScaleIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  MessageCircleIcon,
  MusicIcon } from
'lucide-react';
import {
  ADDRESS,
  PHONE_DISPLAY,
  EMAIL,
  HOURS,
  WHATSAPP_LINK,
  NAV_LINKS } from
'../lib/constants';
const SOCIALS = [
{
  icon: MessageCircleIcon,
  label: 'WhatsApp',
  href: WHATSAPP_LINK
},
{
  icon: InstagramIcon,
  label: 'Instagram',
  href: '#'
},
{
  icon: FacebookIcon,
  label: 'Facebook',
  href: '#'
},
{
  icon: MusicIcon,
  label: 'TikTok',
  href: '#'
},
{
  icon: LinkedinIcon,
  label: 'LinkedIn',
  href: '#'
}];

export function Footer() {
  return (
    <footer className="w-full bg-petrol-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white shrink-0">
                <ScaleIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight flex flex-col justify-center">
                <span className="block font-serif text-sm font-600">
                  Estudio Jurídico
                </span>
                <span className="block text-xs font-semibold text-white/90">
                  Juan Pedro Negri &amp; Asociados
                </span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/50 mt-0.5">
                  Mendoza · Argentina
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
              Abogado en Mendoza especializado en accidentes de tránsito,
              reclamos laborales, ART y daños y perjuicios. Defendemos sus
              derechos con experiencia y compromiso.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) =>
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-petrol">
                
                  <s.icon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-600 uppercase tracking-wide text-white/50">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) =>
              <li key={l.href}>
                  <a
                  href={l.href}
                  className="text-[15px] text-white/75 hover:text-white transition-colors">
                  
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-600 uppercase tracking-wide text-white/50">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-white/75">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                {ADDRESS}
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                {PHONE_DISPLAY}
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                {EMAIL}
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                {HOURS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Estudio Jurídico Mendoza. Todos los
            derechos reservados.
          </p>
          <p>Abogado laboral y accidentes de tránsito en Mendoza, Argentina.</p>
        </div>
      </div>
    </footer>);

}