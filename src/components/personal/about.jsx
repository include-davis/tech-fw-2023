import React, { Component } from 'react';
import styles from '/Users/krishna/Desktop/untitled folder/tech-fw-2023/src/styles/components/personal/about.module.scss';

export default function About() {
  return (
    <div>
      <div>
        <span className={styles.h}><strong>UI/UX DESIGNER</strong></span>
      </div>

      <p className={styles.font}>
  Hello, my name <br />
  is Krishna Gupta
</p>

<p className={styles.font1}>
  I am very passionate about web development,<br />
  love to do projects related to it,
  <br />
  and I am also interested in computer vision, <br />
  and the application of AI/ML in
  different fields.
</p>

<p className={styles.box}>Contact Me</p>



<div className={styles.pic}>
          <img src="/pic.jpeg" alt="Description" />
        </div>

        
</div>

    
  );
}
