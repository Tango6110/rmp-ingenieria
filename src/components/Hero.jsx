export default function Hero() {
  return (
    <div
      className="h-[300px] md:h-[450px] bg-cover bg-center flex items-center justify-center mt-16"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="bg-black/60 p-6 rounded-xl text-center text-white">
        <h1 className="text-xl md:text-3xl font-bold">
          RMP Ingeniería Industrial Eléctrica
        </h1>
        <p className="mt-2">
          Soluciones eléctricas industriales
        </p>
      </div>
    </div>
  );
}
