import React, { Component } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from "@/styles/components/personal/about.module.scss";
import Image from "next/image";

export default function About() {
    return (
      <section>
        <nav className={styles.nav}>
          <div className={styles.nav_menu}><AiOutlineMenu size={28}/></div>
        </nav>
        <div className={styles.body}>
          <div className={styles.about}>
            <h2 className={styles.profession}>UI/UX Designer</h2>
            <h1 className={styles.name}>Cristian Embleton</h1>
            <p className={styles.description}>Currently studying computer software and hardware engineering at UC Davis. Always looking for ways to learn more.</p>
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
              <button type="button" className={styles.button}>Contact me</button>
            </a>
          </div>
          <div className={styles.picture}>
            {/* <Image className={styles.image_bg}
              src="/purple_circle.png"
              width={100}
              height={100}
              alt={"backdrop"}
            /> */}
            <Image className={styles.image}
              src="/cristian.png"
              width={250}
              height={250}
              alt={"portfolio picture"}
            />
          </div>
        </div>
      </section>
    )
}
