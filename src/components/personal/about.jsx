import React, { Component } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.infoCard}>
        <h1>hello!</h1>
        <p>
          I'm Ryan, and I currently attend UCD for CS. Welcome to my first web
          dev project
        </p>
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
          <p>HDSAOIHDSAIODHSAOIDHO</p>
          <p>ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
          <p>help</p>
        </div>
      </div>
      {/* <img src={"/personal/emily.jpg"} /> */}
      {/* <a href={"https://www.google.com"} target="_blank"> */}
        {/* <img src={"/personal/emily.jpg"} /> */}
      {/* </a> */}
      
    </div>
  );
}
