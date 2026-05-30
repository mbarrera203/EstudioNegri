import React, { useState } from 'react';
import {
  SendIcon,
  MessageCircleIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon } from
'lucide-react';
import { SectionReveal } from './SectionReveal';
import { Gracias } from './Gracias';
import {
  WHATSAPP_LINK,
  ADDRESS,
  PHONE_DISPLAY,
  EMAIL,
  HOURS } from
'../lib/constants';
const CONSULTA_TYPES = [
'Accidente de tránsito',
'Accidente laboral / ART',
'Despido',
'Trabajo no registrado',
'Daños y perjuicios',
'Otra consulta'];

const CONTACT_INFO = [
{
  icon: MapPinIcon,
  label: 'Dirección',
  value: ADDRESS
},
{
  icon: PhoneIcon,
  label: 'Teléfono',
  value: PHONE_DISPLAY
},
{
  icon: MailIcon,
  label: 'Email',
  value: EMAIL
},
{
  icon: ClockIcon,
  label: 'Horarios',
  value: HOURS
}];

export function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // submit to Netlify Forms via AJAX so we can stay on the page
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, String(value)));
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error sending form', err);
      // keep UX simple: still show submitted state or you can show an error
      setSubmitted(true);
    }
  };
  return (
    <section id="contacto" className="w-full bg-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-bluegray">
              Contacto
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-600 text-petrol tracking-tight">
              Solicite su asesoramiento
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-bluegray max-w-md">
              Cuéntenos su situación y lo contactaremos a la brevedad. La
              primera consulta es sin cargo y confidencial.
            </p>

            <ul className="mt-8 space-y-5">
              {CONTACT_INFO.map((c) =>
              <li key={c.label} className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-petrol/10 text-petrol">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-600 uppercase tracking-wide text-bluegray">
                      {c.label}
                    </p>
                    <p className="text-[15px] text-petrol">{c.value}</p>
                  </div>
                </li>
              )}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-petrol px-7 py-4 text-base font-600 text-white hover:bg-petrol-dark transition-colors">
              
              <MessageCircleIcon className="h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </SectionReveal>

          <SectionReveal delay={0.12} className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-7 sm:p-9 shadow-xl shadow-petrol/5 border border-gray-100">
              {submitted ?
                <Gracias /> :

              <form name="contacto" method="POST" data-netlify="true" onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <input type="hidden" name="form-name" value="contacto" />
                  <Field
                  id="nombre"
                  label="Nombre"
                  placeholder="Su nombre completo"
                  required />
                
                  <Field
                  id="telefono"
                  label="Teléfono"
                  type="tel"
                  placeholder="Su teléfono"
                  required />
                
                  <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Su correo electrónico"
                  className="sm:col-span-2"
                  required />
                

                  <div className="sm:col-span-2">
                    <label
                    htmlFor="tipo"
                    className="mb-1.5 block text-sm font-600 text-petrol">
                    
                      Tipo de consulta
                    </label>
                    <select
                    id="tipo"
                    name="tipo"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] text-petrol outline-none transition-colors focus:border-petrol focus:ring-2 focus:ring-petrol/15">
                    
                      <option value="" disabled>
                        Seleccione una opción
                      </option>
                      {CONSULTA_TYPES.map((t) =>
                    <option key={t} value={t}>
                          {t}
                        </option>
                    )}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-600 text-petrol">
                    
                      Mensaje
                    </label>
                    <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntenos brevemente su situación"
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] text-petrol outline-none transition-colors focus:border-petrol focus:ring-2 focus:ring-petrol/15" />
                  
                  </div>

                  <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-petrol px-7 py-4 text-base font-600 text-white hover:bg-petrol-dark transition-colors">
                  
                    <SendIcon className="h-4 w-4" />
                    Solicitar asesoramiento
                  </button>
                </form>
              }
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>);

}
interface FieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}
function Field({
  id,
  label,
  type = 'text',
  placeholder,
  required,
  className
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-600 text-petrol">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] text-petrol outline-none transition-colors placeholder:text-gray-400 focus:border-petrol focus:ring-2 focus:ring-petrol/15" />
      
    </div>);

}