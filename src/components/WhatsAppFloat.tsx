import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, XIcon } from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    const tl = setTimeout(() => setShowLabel(true), 2200);
    return () => {
      clearTimeout(t);
      clearTimeout(tl);
    };
  }, []);
  return (
    <AnimatePresence>
      {show &&
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.9
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{
          opacity: 0,
          y: 24
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        
          <AnimatePresence>
            {showLabel &&
          <motion.div
            initial={{
              opacity: 0,
              x: 12
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: 12
            }}
            transition={{
              duration: 0.3
            }}
            className="relative hidden sm:flex items-center rounded-2xl bg-white px-4 py-3 shadow-xl shadow-petrol/10 border border-gray-100">
            
                <p className="text-sm font-500 text-petrol">
                  ¿Necesita ayuda?{' '}
                  <span className="font-600">Escríbanos ahora.</span>
                </p>
                <button
              type="button"
              aria-label="Cerrar mensaje"
              onClick={() => setShowLabel(false)}
              className="ml-3 text-bluegray hover:text-petrol">
              
                  <XIcon className="h-4 w-4" />
                </button>
              </motion.div>
          }
          </AnimatePresence>

          <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar por WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105">
          
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <MessageCircleIcon className="h-7 w-7" />
          </a>
        </motion.div>
      }
    </AnimatePresence>);

}