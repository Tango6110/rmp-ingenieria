export default function Galeria() {
  const fotos = [
    "/uno.jpg",
    "/dos.jpg",
    "/tres.jpg",
    "/cuatro.jpg",
    "/cinco.jpg",
    "/seis.jpg",
  ];

  return (
    <section
      id="galeria"
      className="scroll-mt-32 md:scroll-mt-24 p-6 md:p-10 bg-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Trabajos Realizados
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
        Experiencia en terreno en instalaciones eléctricas industriales,
        auditorías técnicas, sistemas de puesta a tierra y cumplimiento
        normativo en distintos sectores industriales y mineros.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotos.map((foto, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={foto}
              alt={`Trabajo ${index + 1}`}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}