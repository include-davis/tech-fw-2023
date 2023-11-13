// import styles from styling folder!
import styles from '@/styles/components/personal/skillset.module.scss'

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return <section>      
    <div className={styles.skillsSection}>
    <div className={styles.skillsBox}>
      <h1>Skills</h1>
      <div className={styles.skillItem}>Python</div>
      <div className={styles.skillItem}>C++</div>
      <div className={styles.skillItem}>C</div>
      <div className={styles.skillItem}>JavaScript</div>
      <div className={styles.skillItem}>TypeScript</div>
      <div className={styles.skillItem}>React</div>
      <div className={styles.skillItem}>Assembly</div>
      <div className={styles.skillItem}>HTML5</div>
      <div className={styles.skillItem}>CSS3</div>
    </div>
  </div>
</section>;
}
