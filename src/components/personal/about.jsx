import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss';

export default function About() {
    return (
      <div className={styles.body}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h1>
                Hello, my name is David Lee
              </h1>
              <h2>
                I am a second year Computer Science major.
                During my free time I like to play games and hangout with friends.
                I especially love playing and watching soccer. 
                I am really excited to join #include and I can't wait for the learning opportunities and connections with people that I will make here.
              </h2>
            </div>
            <img
              src="/personal/intro.jpeg"
              className={styles.introImg}
              width={450}
              height={450}
              alt="introImg"
            />
          </div>
        </div>
      </div>
    )
}
