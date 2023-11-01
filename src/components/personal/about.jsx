import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss';

export default function About() {
    return (
      <div className={styles.body}>

        <div className={styles.header}> 
          David Lee

          <div className={styles.introduction}>
            Hi my name is David Lee and I am from Maryland. I came to Davis
            because of the possible connections that I could create and also because of its proximity to Silicon Valley.
          </div>

          <div className={styles.hobbies}>
            During my free time I like to play games and hangout with friends.
            I especially love playing and watch soccer. I have trouble waking up for class, but I somehow always wake up in time for a soccer match.
          </div>

          <div className={styles.endingParagraph}>
            I am really excited to join #include and I can't wait for the learning opportunites and connections with people that I will make here.
          </div>

          <div className={styles.closing}>
            Thank you!
          </div>

        </div>

      </div>
    )
}
