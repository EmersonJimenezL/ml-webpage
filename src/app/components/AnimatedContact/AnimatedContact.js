import { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

import style from "./AnimatedContact.module.css";

const slideUp = keyframes`
  from {
    transform: translateY(100px); // Empezamos desde más abajo
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default function AnimatedTitle() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Activa la animación al entrar en vista
        } else {
          setIsVisible(false); // Reinicia cuando sale de vista
        }
      },
      { threshold: 0.1 } // Se activa cuando el título es un 10% visible
    );

    // Solo observa si el ref actual no es null
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Función de limpieza que desconecta el observador
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Typography
      id="contacto"
      ref={titleRef}
      variant="h1"
      sx={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${slideUp} 0.8s ease-out` : "none",
        transition: "opacity 0.5s ease-out",
        textAlign: "center",
        position: "relative",
        fontFamily: "Tinos, serif", // Asegúrate de tener la fuente Tinos disponible o en Google Fonts
        fontWeight: 700,
        textShadow: "2px 2px 5px rgba(255, 255, 255, 0.342)", // Sombra sutil hacia abajo
        color: "white", // Ajusta el color según el fondo
        letterSpacing: "15px",
        margin: "50px 0px",
      }}
      className={style.title}
    >
      Contacto
    </Typography>
  );
}
