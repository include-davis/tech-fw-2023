import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
    return (
      <div className={styles.about_me}>  {/*container for entire about me section*/}
        <div className={styles.about_text}> {/*container for about me text*/}
          {/* about_text items*/}
          <p className={styles.job_title}>Computer Science Student</p>
          <h1 className={styles.greeting}>Hello, my name is Kashvi Dwarka!</h1>
          <p className={styles.subgreeting}>I'm a third year student at UC Davis studying computer science. 
              Scroll to see more about my experience, skills, and projects :D </p>
          <button className={styles.contact_button}>Contact Me!</button>
          {/*end container for about me text*/}
        </div>  

        <div className={styles.personalImage} style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
          <Image src="/personalImage.jpg" width={300} height={400} alt="personal image" />
        </div>
        {/*end container for about me section*/}
      </div> 
    )
}
