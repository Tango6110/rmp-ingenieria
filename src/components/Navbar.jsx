import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-3 md:p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="font-bold text-lg">
          RMP Ingeniería Industrial Eléctrica
        </h1>

        {/* Botón móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-5 text-sm lg:text-base">

          <a href="#inicio" className="hover:text-yellow-400">
            Inicio
          </a>

          <a href="#especialidades" className="hover:text-yellow-400">
            Servicios
          </a>

          <a href="#galeria" className="hover:text-yellow-400">
            Trabajos
          </a>

          <a href="#sectores" className="hover:text-yellow-400">
            Sectores
          </a>

          <a href="#clientes" className="hover:text-yellow-400">
            Clientes
          </a>

          <a href="#empresa" className="hover:text-yellow-400">
            Empresa
          </a>

          <a href="#quienes" className="hover:text-yellow-400">
            Quiénes Somos
          </a>

          <a href="#contacto" className="hover:text-yellow-400">
            Contacto
          </a>

        </div>
      </div>

      {/* Menú Móvil */}
      {open && (
        <div className="flex flex-col mt-4 md:hidden gap-3 text-center">

          <a href="#inicio" onClick={() => setOpen(false)}>
            Inicio
          </a>

          <a href="#especialidades" onClick={() => setOpen(false)}>
            Servicios
          </a>

          <a href="#galeria" onClick={() => setOpen(false)}>
            Trabajos
          </a>

          <a href="#sectores" onClick={() => setOpen(false)}>
            Sectores
          </a>

          <a href="#clientes" onClick={() => setOpen(false)}>
            Clientes
          </a>

          <a href="#empresa" onClick={() => setOpen(false)}>
            Empresa
          </a>

          <a href="#quienes" onClick={() => setOpen(false)}>
            Quiénes Somos
          </a>

          <a href="#contacto" onClick={() => setOpen(false)}>
            Contacto
          </a>

        </div>
      )}
    </nav>
  );
}
