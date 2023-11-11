// import styles from styling folder!
import React from 'react';
import styles from '@/styles/components/personal/skillset.module.scss';


/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/


export default function Skills() {


  return <section className={styles.skills}>
    <div className={styles.container}>
    <h1 className={styles.header}>
        <br />
        SKILLS
      </h1>
      <div className={styles.box}>
        Python
      </div>
      <div className={styles.box}>
        C/C++
      </div>
      <div className={styles.box}>
        Communication
      </div>
  
    </div>
  </section>;


}

