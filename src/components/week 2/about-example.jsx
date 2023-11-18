import React, { Component } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import styles from "@/styles/components/week 2/about-example.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.infoCard}>
        <div className={styles.infoCardText}>
          <h1>Welcome! 👋</h1>
          <p>My name is Ryan and this is my portfolio. 😎</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.logos}>
            <div className={styles.logoGroup}>
              <a href={""} target="_blank">
                <FaLinkedin className={styles.logo} />
              </a>
              <a href={""} target="_blank">
                <FaGithub className={styles.logo} />
              </a>
            </div>
            <div className={styles.logoGroup}>
              <a href={""} target="_blank">
                <TiSocialInstagramCircular className={styles.logo} />
              </a>
              <a href={""} target="_blank">
                <SiGmail className={styles.logo} />
              </a>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.projectButton}>View Projects</button>
            <button className={styles.connectButton}>Get In Touch</button>
          </div>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <h1>About Me</h1>
        <div className={styles.aboutMeText}>
          <p>I'm a 3rd year CS Major who started off with Economics</p>
          <p>
            I love all things green, especially <span>Matcha</span> 🍵
          </p>
          <p>Gib more plushes {"(>._.)>"} 🧸</p>
        </div>
      </div>
    </div>
  );
}
