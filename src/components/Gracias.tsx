import React from 'react';
import { CheckCircle2Icon, MessageCircleIcon } from 'lucide-react';

export function Gracias() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-petrol/10 text-petrol">
        <CheckCircle2Icon className="h-8 w-8" />
      </span>
      <h3 className="mt-5 font-serif text-2xl font-600 text-petrol">¡Gracias por contactarnos!</h3>
      <p className="mt-3 max-w-sm text-bluegray">
        Recibimos su consulta y lo contactaremos a la brevedad. Si prefiere,
        también puede escribirnos directamente por WhatsApp.
      </p>
      <a
        href="#contacto"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-petrol px-6 py-3 text-sm font-600 text-white hover:bg-petrol-dark transition-colors">
        <MessageCircleIcon className="h-4 w-4" />
        Volver al formulario
      </a>
    </div>
  );
}
