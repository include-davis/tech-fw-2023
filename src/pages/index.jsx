import React, { Component } from "react";
import styles from "../styles/index.module.scss";

/*
landing page:
  need to replace buttons with links
;
*/
export default function Index() {
  return (
    <div className={styles.body}>
      <h1 className={styles.hero}>
        Welcome developers to the 2023-2024 Technical Cohort!
      </h1>
      <div className={styles.workshops}>
        <div className={styles.workshop}>
          <h2>Workshop #1: Initial Set Up</h2>
          <ul className={styles.learningGoals}>
            <li>How The Internet Works</li>
            <li>Overview of Web Development</li>
            <li>Workspace Set Up</li>
            <li>Basic HTML & CSS</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.workshop}>
          <h2>Workshop #2: Intro to HTML and CSS</h2>
          <ul className={styles.learningGoals}>
            <li>Box Model</li>
            <li>Flexbox</li>
            <li>Responsiveness</li>
            <li>Media Queries</li>
            <li>Positioning</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.workshop}>
          <h2>Workshop #3: Javascript + Next.js Frontend</h2>
          <ul className={styles.learningGoals}>
            <li>Coming Soon</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.workshop}>
          <h2>Workshop #4: Next.js Backend</h2>
          <ul className={styles.learningGoals}>
            <li>Coming Soon</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.workshop}>
          <h2>Workshop #5: TBD</h2>
          <ul className={styles.learningGoals}>
            <li>TBD</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
