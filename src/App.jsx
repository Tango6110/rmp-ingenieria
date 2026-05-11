import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Inicio */}
      <section id="inicio">
        <Hero />
      </section>

      {/* Servicios */}
      <Servicios />

      {/* Empresa */}
      <section id="empresa" className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Nuestra Empresa
        </h2>

        <p>
          RMP Ingeniería Industrial Eléctrica entrega soluciones técnicas
          especializadas en el área eléctrica industrial, enfocadas en
          seguridad, normativa y eficiencia operacional.
        </p>
      </section>

      {/* Quiénes Somos */}
     <section id="quienes" className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Quiénes Somos
        </h2>

        <p>
          Ingenieros y técnicos con más de 30 años de experiencia en
          distribuidoras, transmisoras, faenas mineras y la
          Superintendencia de Electricidad y Combustibles.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-32 md:scroll-mt-24 bg-gray-100 p-6 md:p-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Contacto
        </h2>

        {/* Correo */}
        <p className="mb-4">
          📧{" "}
          <a
            href="mailto:ramirandap26@gmail.com"
            className="text-blue-600 hover:underline"
          >
            contactoIndustrial@rmpingenieria.cl
          </a>
        </p>
		<p className="mb-4">
          📧{" "}
          <a
            href="mailto:e.m.rmpingenieria@gmail.com"
            className="text-blue-600 hover:underline"
          >
            contactoCoordinador@rmpingenieria.cl
          </a>
        </p>

        {/* Teléfonos clickeables */}
        <div className="flex flex-col gap-3 items-center">

          <a
            href="tel:+56977082115"
            className="text-lg text-green-700 hover:underline"
          >
            📱 +56 9 77082115
          </a>

          <a
            href="tel:+56962207892"
            className="text-lg text-green-700 hover:underline"
          >
            📱 +56 9 62207892
          </a>
		  <a
            href="tel:+56962391408"
            className="text-lg text-green-700 hover:underline"
          >
            📱 +56 9 62391408
          </a>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/56977082115"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}
