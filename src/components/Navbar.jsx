import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-3 md:p-4 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">RMP Ingeniería</h1>

        {/* Botón móvil */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-6">
          <a href="#inicio">Inicio</a>
          <a href="#empresa">Empresa</a>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="flex flex-col mt-4 md:hidden gap-2">
          <a href="#inicio">Inicio</a>
          <a href="#empresa">Empresa</a>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#contacto">Contacto</a>
        </div>
      )}
    </nav>
  );
}
