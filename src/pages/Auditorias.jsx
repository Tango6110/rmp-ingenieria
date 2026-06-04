import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";

export default function Auditorias() {
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
              Auditorías Eléctricas Industriales
            </h1>

            <p className="text-xl max-w-4xl">
              Evaluación técnica, cumplimiento normativo SEC y diagnóstico
              integral de instalaciones eléctricas industriales, mineras
              y energéticas.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 md:p-10">

          <img
  src="/auditorias.jpg"
  alt="Auditoría eléctrica industrial"
  className="w-full max-h-[450px] object-cover rounded-xl shadow-lg mb-8"
/>


          <h2 className="text-3xl font-bold mb-4">
            ¿Qué es una Auditoría Eléctrica Industrial?
          </h2>

          <p className="mb-4">
            Una auditoría eléctrica industrial permite identificar
            incumplimientos normativos, riesgos operacionales y oportunidades
            de mejora en instalaciones eléctricas de baja, media y alta tensión.
          </p>

          <p className="mb-8">
            Nuestro equipo cuenta con experiencia en minería,
            distribución eléctrica, transmisión eléctrica y organismos
            reguladores, participando en proyectos de alta complejidad
            técnica durante más de 30 años.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Servicios Incluidos
          </h2>

          <ul className="space-y-3 mb-8">
            <li>✔ Auditorías eléctricas industriales.</li>
            <li>✔ Evaluación de cumplimiento SEC.</li>
            <li>✔ Revisión normativa RIC y RPTD.</li>
            <li>✔ Diagnóstico de instalaciones existentes.</li>
            <li>✔ Revisión de sistemas de protección.</li>
            <li>✔ Evaluación de riesgos eléctricos.</li>
            <li>✔ Elaboración de informes técnicos.</li>
            <li>✔ Recomendaciones de mejora.</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4">
            Beneficios para su Empresa
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-100 p-5 rounded-xl shadow">
              Reducción de riesgos operacionales.
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              Cumplimiento normativo SEC.
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              Mayor seguridad para trabajadores.
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              Disminución de fallas eléctricas.
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Solicite una Evaluación Técnica
            </h2>

            <p className="mb-6">
              Contáctenos para evaluar sus instalaciones y verificar
              el cumplimiento de las exigencias normativas aplicables.
            </p>

            <a
              href="tel:+56977082115"
              className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold"
            >
              Llamar Ahora
            </a>
          </div>

        </div>

      </div>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
