import React from "react";
import styles from "@/styles/components/week 2/responsiveness.module.scss";

export default function Responsiveness() {
  return (
    <section className={styles.card}>
      <img
        className={styles.headshot}
        src="/cat-frying-egg.png"
        alt="frying pan cat"
      />
      <div className={styles.info}>
        <h1>Hello, I'm a cat! 🐱</h1>
        <ul className={styles.facts}>
          <li>I am a cat.</li>
          <li>I fry egg.</li>
          <li>I eat egg.</li>
          <li>Do you like eggs?</li>
        </ul>
      </div>
    </section>
  );
}
