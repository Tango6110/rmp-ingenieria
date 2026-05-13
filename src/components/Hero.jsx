export default function Hero() {
  return (
    <section
      className="relative h-[450px] md:h-[650px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex justify-center items-center w-full px-4">
        <div className="bg-gray-900/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl text-center text-white max-w-3xl shadow-2xl">
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            RMP Ingeniería Industrial Eléctrica
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Soluciones eléctricas industriales con foco en seguridad,
            normativa y eficiencia operacional.
          </p>

          <p className="mt-4 text-sm md:text-base text-gray-200">
            Más de 30 años de experiencia en minería, transmisión,
            distribución y auditorías técnicas especializadas.
          </p>

        </div>
      </div>
    </section>
  );
}
