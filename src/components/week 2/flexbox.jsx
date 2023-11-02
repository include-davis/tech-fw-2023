import React, { Component } from "react";
import styles from "@/styles/components/week 2/flexbox.module.scss";

export default function Flexbox() {
  return (
    <section className={styles.container}>
      <div className={styles.mainAxis} />
      <h1 className={styles.mainText}>Main Axis</h1>
      <div className={styles.crossAxis} />
      <h1 className={styles.crossText}>Cross Axis</h1>

      <div className={styles.item1}>1</div>
      <div className={styles.item2}>2</div>
      <div className={styles.item3}>3</div>
    </section>
  );
}
