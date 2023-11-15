import React, { Component } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from "@/styles/components/personal/about.module.scss";
import Image from "next/image";

// impressive. loved to see how creative you got with this!
// structure is really good, classnames are meaningful, appreciate the use of Image, and the code is really clean.
// did not appreciate the rickroll >:(  (jk)
// one thing: you don't really need a div wrapping around your Image element, you can directly apply your styles to the image.

export default function About() {
    return (
      <section className={styles.section}>
        <nav className={styles.nav}>
          <div className={styles.nav_menu}><AiOutlineMenu size={28}/></div>
        </nav>
        <div className={styles.body}>
          <div className={styles.about}>
            <h2 className={styles.profession}>UI/UX Designer</h2>
            <h1 className={styles.name}>Cristian Embleton</h1>
            <p className={styles.description}>Second year at UC Davis studying computer science and engineering. Always looking for ways to learn more.</p>
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
              <button type="button" className={styles.button}>Contact me</button>
            </a>
          </div>
          <Image className={styles.picture}
            src="/cristian_photoshop_clean.png"
            width={500}
            height={500}
            alt={"portfolio picture"}
            style={styles.picture}
          />
        </div>
      </section>
    )
}
