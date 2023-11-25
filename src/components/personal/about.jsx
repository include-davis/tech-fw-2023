import React, { Component } from 'react';
import styles from'@/styles/components/personal/about.module.scss';

export default function About() {
    return (
      <div className={styles.outer}>
        {/* <div className={styles.centered}> */}
          <div className={styles.infoCard}>
            <h2>Vivica Tran</h2>
            <p>I am a third year Computer Science student at UC Davis.</p>
          </div>
        {/* </div> */}
      </div>
    )
}
