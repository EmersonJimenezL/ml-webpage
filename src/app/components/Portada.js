import * as React from "react";
import Image from "next/image";

export default function Portada() {
  return (
    <div className="page">
      <div className="main">
        <Image src="/portada.png" alt="Portada" width={500} height={500} />
      </div>
    </div>
  );
}
