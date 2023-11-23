import styles from '@/styles/components/personal/skillset.module.scss';
import React from 'react';


export default function Skills() {
  return (

    <div className={styles.bg}>
    
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
