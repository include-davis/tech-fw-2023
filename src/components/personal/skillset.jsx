// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss";

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return <section className={styles.skills}>
    <div className={styles.title}>
      skills
    </div>
    <div className={styles.skillSet}>
      <div className={styles.java}>
        <div className={styles.languages}>
          java
        </div>
        <div className={styles.languagesDescription}>
          some experience
        </div>
      </div>
      <div className={styles.divider}>
          &#10032;
        </div>
      <div className={styles.python}>
        <div className={styles.languages}>
          python
        </div>
        <div className={styles.languagesDescription}>
          some experience
        </div>
      </div>
      <div className={styles.divider}>
          &#10032;
        </div>
      <div className={styles.html}>
        <div className={styles.languages}>
          html
        </div>
        <div className={styles.languagesDescription}>
          some experience
        </div>
      </div>
      <div className={styles.divider}>
          &#10032;
        </div>
      <div className={styles.css}>
        <div className={styles.languages}>
          css
        </div>
        <div className={styles.languagesDescription}>
          some experience
        </div>
      </div>
      <div className={styles.divider}>
          &#10032;
        </div>
      <div className={styles.unity}>
        <div className={styles.languages}>
          unity game engine
        </div>
        <div className={styles.languagesDescription}>
          some experience
        </div>
      </div>
    </div>
  </section>
}
