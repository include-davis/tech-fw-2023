import React, { Component } from "react";
import Image from "next/image";
import styles from "../styles/index.module.scss";

/*
landing page:
  header
  hero
  navbar
;
*/
export default function Index() {
  return (
    <div className={styles.body}>
      <nav className={styles.nav_bar}>
        <Image
          src="/Vector.svg"
          width={40}
          height={40}
          alt=""
          className={styles.logo}
        ></Image>
        <h1 className={styles.brand}>include</h1>
        <ul className={`${styles.list} ${styles.nav_links}`}>
          <li>Home</li>
          <li>Workshops</li>
          <li>Resources</li>
        </ul>
      </nav>
      <h1 className={styles.hero}>
        Welcome developers to the 2023-2024 Technical Cohort!
      </h1>
      <div className={styles.workshops}>
        <h2>Workshop #1: Initial Set Up</h2>
        <button className={styles.btn}>Get Started</button>
        <h2>Workshop #2: Intro to HTML and CSS</h2>
        <button className={styles.btn}>Get Started</button>
        <h2>Workshop #3: Advanced HTML and CSS</h2>
        <button className={styles.btn}>Get Started</button>
        <h2>Workshop #4: Next.js and Backend</h2>
        <button className={styles.btn}>Get Started</button>
        <h2>Workshop #5: I don't know</h2>
        <button className={styles.btn}>Get Started</button>
      </div>
    </div>
  );
}
