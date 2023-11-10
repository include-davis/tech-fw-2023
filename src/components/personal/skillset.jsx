// import styles from styling folder!
import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/skillset.module.scss";
/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  //return <section className={styles.skills}>skills</section>;
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillsHeading}>
        <h1 className={styles.skillsHeadingText}>Skills</h1>
      </div> 
      <div className={styles.skillsList}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>C++</li>
          <li>Git</li>
        </ul>
      </div>
    </div> 
  )
}
