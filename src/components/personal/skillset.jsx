// import styles from styling folder!
import styles from "../../styles/components/personal/skillset.module.scss";

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/


export default function Skills() {
  return <section className={styles.skills}>
    <h1 className={styles.skills_title}> SKILLS </h1>
    
    <div className={styles.skills_container}>
      <div className={styles.skills_set}>
        <h1 className={styles.set_title}>languages</h1>
        <p>C++,<br></br>Javascript,<br></br></p>
      </div>

      <div className={styles.skills_set}>
        <h1 className={styles.set_title}>soft_skills</h1>
        <p>Planning,<br></br>Communication,<br></br></p>
      </div>
    </div>
  </section>;
}
