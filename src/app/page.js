"use client";
import Navegador from "./components/Navegador/Navegador.js";
import Portada from "./components/Portada/Portada.js";
import Galeria from "./components/Galeria/Galeria.js";
import Redes from "./components/Redes/Redes.js";

export default function Home() {
  return (
    <>
      <div>
        <Navegador />
      </div>
      <div>
        <Portada />
      </div>
      <div>
        <Galeria />
      </div>
      <div>
        <Redes />
      </div>
    </>
  );
}
