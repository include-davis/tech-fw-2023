import React, { Component } from "react";
import Image from "next/image";

import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  return (
    <div>
      <div className={styles.butter}> 
        <h1 className={styles.bread}>Hello, my name</h1>
        <h1 className={styles.bread}>is Esther Whang</h1>
        <br></br>
        <body className={styles.bruh}>
          <div>I'm a senior majoring in CS at UC Davis. </div>
          <div>I'm pursuing a career in the tech industry and hope to</div>
          <div>become a successful tech girlie! </div>
        </body>
        
        <br></br>
        <body className={styles.body2}>
          <div>Some fun facts about me: I love boba, rewatching</div>
          <div>New Girl, and hanging out with friends!</div>
      </body>
      </div>
      <div className={styles.wine}>
      <Image
              src="/dog.jpeg"
              className={styles.heroImg}
              width={450}
              height={450}
              alt="heroImg"
            />
      </div>
      
    </div>
  );
}
