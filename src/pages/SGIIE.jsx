import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";

export default function SGIIE() {
  return (
    <>
      <Navbar />

      <div className="pt-24">

        <div className="bg-blue-900 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">

            <Link
              to="/"
              className="inline-block mb-6 bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold"
            >
              ← Volver al Inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Implementación y Auditorías SGIIE
            </h1>

            <p className="text-xl max-w-4xl">
              Sistemas de Gestión de Integridad de Instalaciones Eléctricas
              para cumplimiento normativo y gestión de riesgos.
            </p>

          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 md:p-10">

          <img
            src="/sgiie.jpg"
            alt="SGIIE"
            className="w-full max-h-[450px] object-cover rounded-xl shadow-lg mb-8"
          />

          <h2 className="text-3xl font-bold mb-4">
            Gestión de Integridad Eléctrica
          </h2>

          <p className="mb-4">
            Implementamos y auditamos Sistemas de Gestión de Integridad
            de Instalaciones Eléctricas conforme a los requerimientos SEC.
          </p>

          <p className="mb-8">
            Apoyamos a empresas mineras, energéticas e industriales
            en la creación de procedimientos, controles y documentación.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Servicios Incluidos
          </h2>

          <ul className="space-y-3 mb-8">
            <li>✔ Diagnóstico inicial SGIIE.</li>
            <li>✔ Auditorías de cumplimiento.</li>
            <li>✔ Elaboración documental.</li>
            <li>✔ Procedimientos eléctricos seguros.</li>
            <li>✔ Capacitación técnica.</li>
            <li>✔ Acompañamiento en implementación.</li>
          </ul>

          <div className="bg-blue-900 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Solicite una Auditoría SGIIE
            </h2>

            <a
              href="tel:+56977082115"
              className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold"
            >
              Contactar
            </a>
          </div>

        </div>

      </div>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
