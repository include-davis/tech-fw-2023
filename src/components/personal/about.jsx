import React from 'react';
import styles from '@/styles/components/personal/about.module.scss';


export default function About() {
  return (
    <div className={styles.name}>
      <h2 className={styles.title}>HTML Designer</h2>
      <h1 className={styles.anna}>
        <br />
        Hello, my name is Anna Pandey
      </h1>
      <p className={styles.paragraph}>
        <br />
        <br></br>I am currently a second-year UC Davis student majoring in Mechanical Engineering.
        However,<br></br> I am in the process of switching my major to Computer Science. A little bit
        about me other than<br></br> school is that I am really passionate about learning new skills.
        Currently, I'm fostering a hobby<br></br> to learn more coding languages to better aid my
        coding journey down the line.
      </p>
      <div className={styles.image}>
        <img src="/mypicture.jpg" alt="picture of me" />
      </div>
    </div>
  );
}
