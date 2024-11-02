import * as React from "react";

import styles from "./Portada.module.css";

export default function Portada() {
  return (
    <div className={styles.divprin}>
      <div>
        <h1 className={styles.title}>María Leonarda</h1>
        <h2 className={styles.subtitle}>Diseño y confección</h2>
      </div>
    </div>
  );
}
