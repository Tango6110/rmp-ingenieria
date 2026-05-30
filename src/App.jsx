import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import WhatsAppButton from "./components/WhatsAppButton";
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
	  <section
  id="especialidades"
  className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 bg-white"
>
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Especialidades Técnicas
  </h2>

  <div className="max-w-5xl mx-auto">
    <ul className="space-y-4">
      <li>✔ Auditorías eléctricas industriales bajo normativa SEC.</li>

      <li>✔ Implementación y auditoría de Sistemas SGIIE.</li>

      <li>✔ Estudios y medición de mallas de puesta a tierra.</li>

      <li>✔ Evaluación de riesgos eléctricos según NFPA 70E.</li>

      <li>✔ Elaboración de procedimientos eléctricos seguros.</li>

      <li>✔ Revisión de facturación eléctrica y optimización tarifaria.</li>

      <li>✔ Cumplimiento normativo RIC y RPTD.</li>

      <li>✔ Asesoría para faenas mineras e instalaciones industriales.</li>

      <li>✔ Estudios de protecciones eléctricas industriales.</li>

      <li>✔ Diagnóstico de instalaciones eléctricas existentes.</li>
    </ul>
  </div>
</section>

  <Galeria/>
  <section
  id="clientes"
  className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 bg-gray-100"
>
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Sectores Atendidos
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    <div className="bg-white p-5 rounded-xl shadow">
      Minería
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      Distribución Eléctrica
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      Transmisión Eléctrica
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      Industria Manufacturera
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      Plantas de Procesos
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      Infraestructura Energética
    </div>
  </div>
</section>
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
	
	<section
  id="clientes"
  className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 bg-gray-100"
>
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
    Clientes y Sectores
  </h2>

  <p className="max-w-4xl mx-auto text-center text-gray-700">
    Nuestros Clientes: Agrícola Koala, Cías. Mineras del
	Grupo Las Cenizas, Codelco Teniente.
    Experiencia desarrollando trabajos para empresas del sector industrial,
    energético y minero, incluyendo faenas mineras, distribuidoras,
    transmisoras y proyectos eléctricos especializados.
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
<section
  id="seo"
  className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 bg-gray-50"
>
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      Ingeniería Eléctrica Industrial para Minería e Industria
    </h2>

    <p className="mb-4">
      RMP Ingeniería Industrial Eléctrica presta servicios de auditorías
      eléctricas industriales, evaluación de cumplimiento SEC,
      implementación SGIIE, estudios de mallas de puesta a tierra,
      análisis de protecciones eléctricas y revisión de instalaciones
      eléctricas en Chile.
    </p>

    <p className="mb-4">
      Nuestra experiencia incluye trabajos en minería, distribución,
      transmisión eléctrica e instalaciones industriales de alta exigencia.
    </p>

    <p>
      Apoyamos a empresas que requieren cumplir normativas SEC,
      NFPA 70E, RIC y RPTD, reduciendo riesgos operacionales y mejorando
      la seguridad eléctrica de sus instalaciones.
    </p>
  </div>
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
	<WhatsAppButton/>
      <Footer />
    </>
  );
}
