import React, { Component } from "react";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <h2>Hi, I'm Elysia Oh! 👋</h2>
      </div>
      <div className = {styles.hero}>
        <div className = {styles.heroitem}>
        <h2>Developer 👩🏻‍💻</h2>
        <hr></hr>
        <h1>Hello, my name is Elysia Oh</h1>
        <h3>&gt;</h3>
        <p>Aspiring Web developer and UI designer, I'm a sophomore at UC Davis. I strive to have a career in web/software development to utilize my creativity and design skills. I welcome any internship opportunities and industry connections.</p>
        </div>
        <img src = "https://media.licdn.com/dms/image/C5603AQHA5Xx8TIsqjA/profile-displayphoto-shrink_400_400/0/1627437877896?e=1704326400&v=beta&t=RqAlnIYRzfCac8yKkWbIBaLSEP1Cz6vm4wrEepPylso" alt="Profile"
            className={styles.pfp}></img>
      </div>
    </div>
  );
}
