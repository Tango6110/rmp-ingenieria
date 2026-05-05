import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="inicio">
        <Hero />
      </section>

      <Servicios />

      <section id="empresa" className="p-6 md:p-10 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Nuestra Empresa
        </h2>
        <p>
          RMP Ingeniería Industrial Eléctrica entrega soluciones técnicas 
          especializadas en el área eléctrica, con enfoque en seguridad, 
          normativa y eficiencia.
        </p>
      </section>

      <section id="quienes" className="p-6 md:p-10 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Quiénes Somos
        </h2>
        <p>
          Ingenieros y técnicos con más de 30 años de experiencia en 
          distribuidoras, transmisoras, faenas mineras y la SEC.
        </p>
      </section>

      <section id="contacto" className="bg-gray-100 p-6 md:p-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Contacto
        </h2>

        <p>📧 ramirandap26@gmail.com</p>
        <p>📱 +56 9 77082115</p>
		<p>📱 +56 9 62207892</p>

        <a
          href="https://wa.me/56977082115"
          target="_blank"
          className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}
