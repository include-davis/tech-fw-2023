import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
    return (
      <div className={styles.webpage}>
        <p className={styles.job_title}>Programmer</p>
        <h1 className={styles.greeting}>Hello, my name is Kashvi Dwarka!</h1>
        <p className={styles.subgreeting}>I'm a third year student at UC Davis studying computer science. 
            Scroll to see more about my skills and projects :D </p>
        <button className={styles.contact_button}>Contact Me!</button>
      </div>
    )
}
