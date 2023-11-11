// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss";


/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return (
  <section className={styles.skills}>
    <h1 className={styles.header}>Skills</h1>
      
    <h2 className={styles.header1}>HTML</h2>
      <p>1 Year Experience</p>  
    <h2 className={styles.header2}>CSS</h2>
    <p>1 Year Experience</p>
    <h2 className={styles.header3}>Python</h2>
    <p>1 Year of Experience</p>
   
  </section>
  
  ); 
}
