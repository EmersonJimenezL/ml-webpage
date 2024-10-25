import * as React from "react";

import styles from "./Portada.module.css";

export default function Portada() {
  return (
    <div className={styles.divprin}>
      <div>
        <h1 className={styles.title}>Maria leonarda</h1>
        <p className={styles.subtitle}>Costureria</p>
      </div>
    </div>
  );
}
