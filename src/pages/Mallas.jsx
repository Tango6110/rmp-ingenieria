import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Mallas() {
  return (
    <>
	<Helmet>
  <title>
    Mallas de Puesta a Tierra | RMP Ingeniería
  </title>

  <meta
    name="description"
    content="Diseño, medición y evaluación de mallas de puesta a tierra para instalaciones industriales y mineras."
  />
</Helmet>
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
              Mallas de Puesta a Tierra
            </h1>

            <p className="text-xl max-w-4xl">
              Estudios, mediciones y evaluación de sistemas de puesta a tierra
              para instalaciones industriales, mineras y energéticas.
            </p>

          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 md:p-10">

          <img
            src="/mallas.jpg"
            alt="Mallas de puesta a tierra"
            className="w-full max-h-[450px] object-cover rounded-xl shadow-lg mb-8"
          />

          <h2 className="text-3xl font-bold mb-4">
            Estudios y Mediciones
          </h2>

          <p className="mb-4">
            Realizamos mediciones de resistencia de puesta a tierra,
            estudios de resistividad del terreno y evaluación de
            sistemas existentes.
          </p>

          <p className="mb-8">
            Nuestros servicios permiten verificar el cumplimiento
            normativo y asegurar la protección de personas,
            equipos e instalaciones.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Servicios Incluidos
          </h2>

          <ul className="space-y-3 mb-8">
            <li>✔ Medición de resistencia de puesta a tierra.</li>
            <li>✔ Estudios de resistividad del terreno.</li>
            <li>✔ Diagnóstico de sistemas existentes.</li>
            <li>✔ Informes técnicos especializados.</li>
            <li>✔ Recomendaciones de mejora.</li>
            <li>✔ Cumplimiento SEC y normativa aplicable.</li>
          </ul>

          <div className="bg-blue-900 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Solicite una Evaluación de su Sistema de Puesta a Tierra
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
