import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss'


export default function About() {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          
            <h1>About Me</h1>

            <h2>Hi, my name is Catelyn Bu!</h2>

            <img className={styles.pompom} src={"/personal/pompom.png"} alt={"pompompurin"}/>

            <p>I am a 3rd year student at UC Davis and I am a Design major. I'm excited to participate in Include and to experience what has to come!</p>

            <p>I've also done previous basic website builds which I'll link here:</p>
              <ul>
                <li>
                  <a href="https://appliedartand.design/85-OL-sp23/Catelyn-Bu/" target="_blank">Catelyn Bu Portal Page</a>
                </li>

                <li>
                  <a href="https://appliedartand.design/85-OL-sp23/Catelyn-Bu/catelyn-Bu-Final-root/" target="_blank">Catelyn Bu Art & Design Portfolio</a>
                </li>
              </ul>

        </div>
      </div>
    )
}
