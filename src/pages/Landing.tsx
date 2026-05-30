import { useScreenInit } from '../useScreenInit.ts';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CasosFrecuentes } from '../components/CasosFrecuentes';
import { Servicios } from '../components/Servicios';
import { ConsultaSinCargo } from '../components/ConsultaSinCargo';
import { PorQueElegirnos } from '../components/PorQueElegirnos';
import { Proceso } from '../components/Proceso';
import { Testimonios } from '../components/Testimonios';
import { SobreAbogado } from '../components/SobreAbogado';
import { FAQ } from '../components/FAQ';
import { Contacto } from '../components/Contacto';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
export function Landing() {
  useScreenInit();
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <Hero />
        <CasosFrecuentes />
        <Servicios />
        <ConsultaSinCargo />
        <PorQueElegirnos />
        <Proceso />
        <Testimonios />
        <SobreAbogado />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>);

}