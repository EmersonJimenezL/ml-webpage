"use client";
import Navegador from "./components/Navegador/Navegador.js";
import Portada from "./components/Portada/Portada.js";
import Galeria from "./components/Galeria/Galeria.js";
import Redes from "./components/Redes/Redes.js";
import AnimatedTitle from "./components/AnimatedTitle/AnimatedTitle.js";
import AnimatedContact from "./components/AnimatedContact/AnimatedContact.js";
import Contacto from "./components/Contacto/Contacto.js";

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
        <AnimatedTitle />
      </div>
      <div>
        <Galeria />
      </div>
      <div>
        <Redes />
      </div>
      <div>
        <AnimatedContact />
      </div>
      <div>
        <Contacto />
      </div>
    </>
  );
}
