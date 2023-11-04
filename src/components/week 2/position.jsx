import React from "react";
import styles from "@/styles/components/week 2/position.module.scss";

export default function Position() {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <p>Parent</p>
        <div className={styles.child}>
          <p>Child</p>
        </div>
      </div>
    </section>
  );
}
