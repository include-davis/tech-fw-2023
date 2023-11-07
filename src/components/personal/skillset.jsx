// import styles from styling folder!

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/
import styles from '@/styles/components/personal/skillset.module.scss/'

export default function Skills() {
  return <section className={styles.skills}>
    
    <div className={styles.body}>
        <h1>Skills</h1>

          <div className={styles.flex}>
     

          <div className={styles.textcontainer}>
            <h2>HTML</h2>

            <p>I have experience with html. I have so much experience that I'm so good at html.</p>
          </div>
          

          <div className={styles.textcontainer}>
            <h2>CSS</h2>

            <p>I have experience with css. I have so mcuh experience that I'm so good at css.</p>
          </div>

          </div>


          <div className={styles.textcontainer}>
            <h2>Adobe Photoshop & Illustrator</h2>

            <p>I have experince with Adobe products. I have so mcuh experience that I'm so good at photoshop and illustrator.</p>
          </div>
        
        </div>


  </section>;
}
