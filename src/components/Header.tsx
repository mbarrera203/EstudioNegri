import { useEffect, useState } from 'react';
import { MenuIcon, XIcon, MessageCircleIcon, ScaleIcon } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../lib/constants';
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(31,78,95,0.08)]' : 'bg-transparent'}`}>
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center mr-3">
              <img src="/src/public/LogoJP.png" alt="Estudio Negri" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-base sm:text-lg font-600 text-petrol tracking-tight">
                Estudio Jurídico
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bluegray">
                Mendoza · Argentina
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-500 text-bluegray hover:text-petrol transition-colors">
              
                {link.label}
              </a>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-petrol px-5 py-2.5 text-sm font-600 text-white hover:bg-petrol-dark transition-colors">
              
              <MessageCircleIcon className="h-4 w-4" />
              Consultar
            </a>
            <button
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-petrol hover:bg-cloud transition-colors">
              
              {open ?
              <XIcon className="h-6 w-6" /> :

              <MenuIcon className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {open &&
      <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col">
            {NAV_LINKS.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="py-3 text-base font-500 text-bluegray hover:text-petrol border-b border-gray-50 last:border-0 transition-colors">
            
                {link.label}
              </a>
          )}
            <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-petrol px-5 py-3 text-sm font-600 text-white">
            
              <MessageCircleIcon className="h-4 w-4" />
              Consultar por WhatsApp
            </a>
          </nav>
        </div>
      }
    </header>);

}