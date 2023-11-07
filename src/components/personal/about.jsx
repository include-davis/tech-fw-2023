import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  return (
    <div className={styles.text}>
      <div>
        <img src={"/personal/pixel-bow.jpeg"} alt={"bow"}
        className={styles.bow}/>
        <element className={styles.title}>
        hello, i'm erika!
      </element>
      <img src={"/personal/pixel-bow.jpeg"} alt={"bow"}
        className={styles.bow}/>
      </div>
      <div className={styles.description}>
        i'm a first-year compsci student. i love
        dance and all things artsy. i also really
        like sanrio, especially kuromi ...
      </div>
      <a href="https://www.erikagosti.com" className={styles.website}>
        check out my website --&#62;
      </a>
    </div>
  );
}
