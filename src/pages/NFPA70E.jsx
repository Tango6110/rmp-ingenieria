import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";

export default function NFPA70E() {
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
              Seguridad Eléctrica NFPA 70E
            </h1>

            <p className="text-xl max-w-4xl">
              Evaluación de riesgos eléctricos, procedimientos seguros
              y reducción de exposición a arco eléctrico.
            </p>

          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 md:p-10">

          <img
            src="/nfpa70e.jpg"
            alt="NFPA 70E"
            className="w-full max-h-[450px] object-cover rounded-xl shadow-lg mb-8"
          />

          <h2 className="text-3xl font-bold mb-4">
            Gestión de Riesgos Eléctricos
          </h2>

          <p className="mb-4">
            Evaluamos riesgos asociados a trabajos eléctricos,
            identificando peligros y proponiendo medidas de control.
          </p>

          <p className="mb-8">
            Aplicamos criterios NFPA 70E para mejorar la seguridad
            de trabajadores y contratistas.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Servicios Incluidos
          </h2>

          <ul className="space-y-3 mb-8">
            <li>✔ Evaluación de riesgos eléctricos.</li>
            <li>✔ Estudios de arco eléctrico.</li>
            <li>✔ Procedimientos seguros de trabajo.</li>
            <li>✔ Capacitación especializada.</li>
            <li>✔ Cumplimiento NFPA 70E.</li>
            <li>✔ Mejora de programas de seguridad eléctrica.</li>
          </ul>

          <div className="bg-blue-900 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Solicite una Evaluación NFPA 70E
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
