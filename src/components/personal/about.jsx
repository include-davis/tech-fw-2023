import React from 'react';
import styles from '@/styles/components/personal/about.module.scss'; // Adjust the path based on your project structure

export default function About() {
  return (
    <div className={styles.bg}>
      <div>
        <span className={styles.h}>
          <strong>UI/UX DESIGNER</strong>
        </span>
      </div>

      <p className={styles.font}>
        Hello, my name <br />
        is Krishna Gupta
      </p>

      <p className={styles.font1}>
        I am very passionate about web development,
        <br />
        love to do projects related to it,
        <br />
        and I am also interested in computer vision, <br />
        and the application of AI/ML in different fields.
      </p>

      <p className={styles.box}>Contact Me</p>

      <div className={styles.pic}>
        <img src="/pic.jpeg" alt="Description" />
        <p>
          I am very passionate about web development,<br />
          love to do projects related to it,
          <br />
          and I am also interested in computer vision, <br />
          and the application of AI/ML in different fields.
        </p>
      </div>


      <div className={styles.skill}>
        <strong>Skills</strong>
      </div>

      <div className={styles.content_box}>
        <div className={styles.pic1}>
          <img src="/CSS.png" alt="Description" />
        </div>
        <div className={styles.pic2}>
          <img src="/flask.png" alt="Description" />
        </div>
        <div className={styles.pic3}>
          <img src="/HTML.png" alt="Description" />
        </div>
        <div className={styles.pic4}>
          <img src="/Javascript.png" alt="Description" />
        </div>
        <div className={styles.pic5}>
          <img src="/next.png" alt="Description" />
        </div>
        <div className={styles.pic6}>
          <img src="/react.jpeg" alt="Description" />
        </div>
      </div>
    </div>
  );
}
