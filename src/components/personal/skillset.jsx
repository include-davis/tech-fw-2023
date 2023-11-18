// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss";

/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/
export default function Skills() {
  return <section>
    <div className={styles.skills_container}>
      <div className={styles.pro_lang_container}>
        <p> 
          HTML 
        </p>

        <p> 
          CSS          
        </p> 

        <p> 
          Java   
        </p> 

        <p>
          C++
        </p> 
      </div>  
      
      <div className={styles.nat_lang_container}> 
      <p>
        English
      </p> 
      <p> 
        Spanish
      </p>

      <h3> 
        Basic Japanese 
      </h3>        
      </div>

      <div className={styles.hobbies_container}> 
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
  </section> 
}
