export default function Servicios() {
  const servicios = [
    "Asesorías en tarifas eléctricas y revisión de facturación",
    "Diseño y medición de mallas de puesta a tierra",
    "Implementación y auditorías SGIIE",
    "Auditorías técnicas (NFPA 70E, RIC, RPTD)"
  ];

  return (
    <section id="servicios" className="p-6 md:p-10 bg-gray-100">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
        Nuestros Servicios
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicios.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}