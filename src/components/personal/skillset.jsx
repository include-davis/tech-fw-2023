// import styles from styling folder!
import styles from '@/styles/components/personal/skillset.module.scss';

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return <section className={styles.skills}>
    <h1 className={styles.title}>
    skills
    </h1>
    
    <ul className={styles.skills_list}>
      <li className={styles.skill}>
        <h2> C++ </h2>
        <p> description </p>
      </li>

      <li className={styles.skill}>
        <h2> Python </h2>
        <p> description </p>
      </li>

      <li className={styles.skill}>
        <h2> C++ </h2>
        <p> description </p>
      </li>
      
    </ul>
  </section>;
}
