// import styles from styling folder!
import styles from '@/styles/components/personal/skillset.module.scss';

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

          <img className={styles.helloKitty} src={"/personal/hellokitty.png"} alt={"Hello Kitty"}/>
          <img className={styles.chocoCat} src={"/personal/chocoCat.png"} alt={"Choco Cat"}/>

          <div className={styles.textContainer}>
            <div className={styles.textHTML}>
              <h2>HTML</h2>
              <p>10 months</p>
            </div>
            
            <div className={styles.textCSS}>
              <h2>CSS</h2>
              <p>10 months</p>
            </div>

            <div className={styles.textAdobe}>
              <h2>Adobe Photoshop & Illustrator</h2>
              <p>2.5 years</p>
            </div>

          </div>
        

        </div>


  </section>;
}
