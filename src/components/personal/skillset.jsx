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

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, assumenda?</p>
          </div>
          

          <div className={styles.textcontainer}>
            <h2>CSS</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.</p>
          </div>

          </div>


          <div className={styles.textcontainer}>
            <h2 className={styles.h2_adobe}>
              Adobe Photoshop & Illustrator
            </h2>

            <p className={styles.p_adobe}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat odio, eveniet magni quo suscipit reiciendis consectetur.
            </p>

          </div>
        
        </div>


  </section>;
}
