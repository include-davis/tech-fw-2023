import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss';
export default function About() {
    return (
      <div className={styles.main}>
        <div className={styles.intro}>
          <img className={styles.profilePic} src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" />
          <h1 className={styles.name}>ANNA CAI</h1>
          <h3 className={styles.descr}>First Year Computer Science Major</h3>
          <p className={styles.descr}>Hello, I'm a first year computer science major interested in web development.</p>
         
          
        </div>
        <div>
        <div className={styles.bigContainer}>
          <div className={styles.container}>
            <h1 className={styles.header}>Hobbies</h1>
            <ul>
              <li className={styles.bullet}>Crochet</li>
              <li className={styles.bullet}>Listen to Music (mainly Taylor Swift and Korean R&B) </li>
              <li className={styles.bullet}>Try new foods</li>
              <li className={styles.bullet}>Online shopping</li>
            </ul> 
          </div>

          <div className={styles.container}>
            <h1 className={styles.header}>Contacts</h1>
            <ul>
              <li className={styles.bullet}>GitHub: <a target="_blank" href="https://github.com/anna-c2">anna-c2</a></li>
            </ul>
          </div>
        </div>
        </div>

        
      </div>

      
    )
}
