import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
    return (
      <div className={styles.webpage}>  {/*container for entire webpage*/}
        <div className={styles.about_text}> {/*container for about me text*/}
          <p className={styles.job_title}>Computer Science Student</p>
          <h1 className={styles.greeting}>Hello, my name is Kashvi Dwarka!</h1>
          <p className={styles.subgreeting}>I'm a third year student at UC Davis studying computer science. 
              Scroll to see more about my experience, skills, and projects :D </p>
          <button className={styles.contact_button}>Contact Me!</button>
        </div>  {/*end container for about me text*/}
          <div className={styles.personalImage}>
            <Image src="/personalImage.jpg" width={350} height={450} alt="personal image"/> {/*filler image for now - need to find good picture of myself lol*/}
          </div>
        {/*end container for entire webpage*/}
      </div> 
    )
}
