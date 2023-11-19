// import styles from styling folder!
import styles from '@/styles/components/personal/skillset.module.scss';

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return <section className={styles.skills}>
    <div className={styles.header}>
        <h2>What are some of my skills? 🤔</h2>
      </div>
    <div className={styles.skillsHero}>
      <div className = {styles.skillsItems}>
        <h2>🎨</h2>
        <h3>HTML</h3>
        <p>2 Years</p>
      </div>
      <div className = {styles.skillsItems}>
        <h2>📝</h2>
        <h3>CSS</h3>
        <p>2 Years</p>
      </div>
      <div className = {styles.skillsItems}>
        <h2>☕️</h2>
        <h3>Java</h3>
        <p>2 Years</p>
      </div>
      <div className = {styles.skillsItems}>
        <h2>🧑‍🍳</h2>
        <h3>Cooking</h3>
        <p>Master Chef</p>
      </div>
    </div>
  </section>;
}
