import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss';

export default function About() {
    return (
      <div className = {styles.page}>
        <p className = {styles.jobtitle}>
          Computer Science and Engineering Student
        </p>

        <h1 className={styles.hello}>
          Hello, my name is<br>
          </br> Nandhana Selvam
        </h1>

        <h2 className={styles.hello_description}>
          I am a third year Computer Science <br>
          </br>and Engineering student at UC Davis!
        </h2>

        <p className = {styles.button}>
          Contact Me
        </p>

        <div className={styles.filler_image}>
          <img src="https://cdn.discordapp.com/attachments/686370685991256171/1168472608027713546/IMG_1404.jpg?ex=6551e3ea&is=653f6eea&hm=5af355af6c50e6755e0f560dc9930bbfd8f7a44016e481bcc483db9a0770d65d&"  
          alt = "temporary image until personal image is added"/>
        </div>

      </div>

    )
}
