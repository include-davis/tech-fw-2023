// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss";

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  //return <section className={styles.skills}>skills</section>;
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillsHeading}>
        <h1 className={styles.skillsHeadingText}>Skills</h1>
      </div>
      <div className={styles.skillsList}>
        <ul className={styles.skillBullets}>
          <li className={styles.skillPoints}>HTML/CSS</li>
          <p className={styles.skillExperience}>2 Years of Experience</p>
          <li className={styles.skillPoints}>C++</li>
          <p className={styles.skillExperience}>3 Years of Experience</p>
          <li className={styles.skillPoints}>Linux</li>
          <p className={styles.skillExperience}>3 Years of Experience</p>
          <li className={styles.skillPoints}>Git</li>
          <p className={styles.skillExperience}>3 Years of Experience</p>
          <li className={styles.skillPoints}>GDB</li>
          <p className={styles.skillExperience}>3 Years of Experience</p>
        </ul>
      </div>
    </div>
  );
}
