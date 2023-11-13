import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss'


export default function About() {
    return (
      <div className={styles.container}>
        <div className={styles.body}>

            <img className={styles.pompom} src={"/personal/pompom.png"} alt={"pompompurin"}/>

          <div className={styles.textContainer}>
            <h1>About Me</h1>

            <h2>Hey there! My name is <span>Catelyn Bu</span>.</h2>


            <p>I am a 3rd year student at UC Davis and I am a Design major. I'm excited to participate in Include and to experience what has to come!</p>

            <p>I've also done previous basic website builds which are linked below.</p>

            <div className={styles.buttons}>
                <a href="https://appliedartand.design/85-OL-sp23/Catelyn-Bu/" target="_blank">
                  <button className={styles.buttonPortal}>Catelyn Bu Portal Page</button>
                </a>
                <a href="https://appliedartand.design/85-OL-sp23/Catelyn-Bu/catelyn-Bu-Final-root/" target="_blank">
                  <button className={styles.buttonPortfolio}>Catelyn Bu Art & Design Portfolio</button>
                </a>
            </div>
          </div>
        </div>


      </div>
    )
}
