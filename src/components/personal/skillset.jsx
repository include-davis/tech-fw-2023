// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss";

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
 
 &#9733;   
 */

export default function Skills() {
  return <section>
    <div className={styles.main_skills_container}>
      <h1> Skills </h1>
      <div className={styles.skills_container}>
        <div className={styles.pro_lang_container}>
            <h2> programming languages </h2> 
          <div className = {styles.txt}> 
          <p> 
            HTML, CSS 
          </p>

          <p className = {styles.skill_desc}> Intermediate </p> 

          <p>
            C++
          </p>
          <p className = {styles.skill_desc}> Advanced </p> 

          <p>
            Java, Haskell, Prolog 
          </p>
          <p className = {styles.skill_desc}> Beginner </p>

          </div>  
        </div>  
        
        <div className={styles.nat_lang_container}>
          <h2> natural languages </h2>
          <p>
            English
          </p> 
          <p className = {styles.skill_desc}>
            Native 
          </p>

          <p> 
            Spanish
          </p>
          <p className = {styles.skill_desc}>
            Native 
          </p>


          <p> 
            Japanese 
          </p>
          <p className = {styles.skill_desc}>
            Intermediate, 1 year 
          </p>
        </div>

        <div className={styles.hobbies_container}> 
          <h2> hobbies </h2>
          <p> 
            Crochet 
          </p>

          <p> 
            Language learning 
          </p>

          <p> 
            Drawing  
          </p>
        </div>
      </div>
    </div>
  </section> 
}
