// import styles from styling folder!
import styles from "@/styles/components/personal/skillset.module.scss"
import { TbBrandCpp } from 'react-icons/tb'
import { SiJulia } from 'react-icons/si'
import { BiLogoJava } from 'react-icons/bi'


/* Think about what you want to include for skills
    1. Some ideas might be coding languages, frameworks, libraries, etc
    2. You can also include soft skills like communication, teamwork, etc
    3. Could also put in some of your hobbies or interests
*/

export default function Skills() {
  return  (
    <section className={styles.professional}>
      <h1 className={styles.title}>Professional Development</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <TbBrandCpp size={48}/>
          <SiJulia size={48}/>
          <BiLogoJava size={48}/>
        </div>
        <div className={styles.card}>
          <div className={styles.club}>
            <h2>#include</h2>
            <p>Student-run consulting agency dedicated to building digital solutions for the community</p>
          </div>
          <div className={styles.club}>
            <h2>AISC</h2>
            <p>A network of students fostering AI literacy through programs and events</p>
          </div>
        </div> 
        <div className={styles.card}>
          <div className={styles.project}>
            <h4>NixOS Flake</h4>
            <p>A declarative desktop environment</p>
          </div>
          <div className={styles.project}>
            <h4>Knight's Tour</h4>
            <p>Calculates the path of a knight such that it visits every square once</p>
          </div>
          <div className={styles.project}>
            <h4>Minesweeper</h4>
            <p>Full scale Minesweeper clone</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}
