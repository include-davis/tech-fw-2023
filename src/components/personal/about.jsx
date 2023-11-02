import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import SocialLinks from "../SocialLinks/SocialLinks";
import Image from "next/image";

import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  const autoTypeData=['3rd Year CS major', 'Front-end Developer', 'Programmer', 'Tech Lead'];
  function handleTyper() {
    let textItems = autoTypeData;
    var autoTyper = document.getElementById('typer');
    new Typewriter(autoTyper, {
        strings: textItems,
        autoStart: true,
        pauseFor: 1000,
        loop: true,
    });
  }
  useEffect(
    handleTyper
    ,[]);
    return (
      <div className={styles.main}>
        <div className={styles.homeContent}>
          <h1 className={styles.greeting}>
            Hi There !
          </h1>
          <h2 className={styles.name}>I'm Emily Ng</h2>
            <div className={styles.autoText}>
              I am a <span id="typer"></span>
            </div>
          <p className={styles.connectText}>Feel free to connect with me.</p>
            <SocialLinks className={styles.links} />
        </div>
        <Image className={styles.avatarImage}
          src="/hi.png"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
    )
}
