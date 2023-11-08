// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss"

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return  (
    <section className={styles.container}>
      <div className={styles.card}>
        <h4 className={styles.skills}>C++</h4>
        <h4 className={styles.skills}>Julia</h4>
        <h4 className={styles.skills}>HTML5/CSS</h4>
      </div>
      <div className={styles.card}>
        <h4 className={styles.skills}>C++</h4>
        <h4 className={styles.skills}>Julia</h4>
        <h4 className={styles.skills}>HTML5/CSS</h4>
      </div> 
      <div className={styles.card}>
        <h4 className={styles.skills}>C++</h4>
        <h4 className={styles.skills}>Julia</h4>
        <h4 className={styles.skills}>HTML5/CSS</h4>
      </div>
    </section>
  )
}
