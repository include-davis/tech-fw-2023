// import SCSS file as styles for this component
import styles from '@/styles/components/personal/footer.module.scss';
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";





export default function Footer() {
  // Make a footer!

  /* Steps
    1. Import #include logo for your footer: Can choose logo for yourself
    2. Add your name to the footer
    3. Add social media icons to the footer
    4. Add links to your social media icons

    List of helpful tags:
    <img />: Image
    <a />: Links
    <li> </li>: List elements (MUST BE WRAPPED AROUND UL/OL TAG)
    <div> </div>: 
  */
  return (
    <footer className={styles.footer}>

        <ul className={styles.socials}>
          <li className={styles.icon}> 
            <a href = "www.linkedin.com/in/nandhanaselvam">
              <BsLinkedin className={styles.linkedin_icon}/>
            </a>
          </li>

          <li className={styles.icon}>
            <a href="mailto:nandhanaselvam@gmail.com">
              <FiMail className={styles.mail_icon}/>
            </a>
          </li>

          <li className={styles.icon}>
            <a href="https://github.com/nandhanaselvam">
              <BsGithub className={styles.github_icon}/>
            </a>
          </li>
        </ul>
      

      <section className={styles.info}>

        <section className={styles.logo}>
          <img 
            src= "/android-chrome-192x192.png"
            alt= "Footer logo"
          />
        </section>
        <p>Made by Nandhana Selvam</p>
        
      </section>

      

    </footer>
  );
}
