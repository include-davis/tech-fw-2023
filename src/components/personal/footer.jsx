// import SCSS file as styles for this component
import styles from '@/styles/components/personal/footer.module.scss';
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";




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
              <BsLinkedin
              />
            </a>
          </li>

          <li className={styles.icon}>
            <a href="mailto:nandhanaselvam@gmail.com">
              <FiMail/>
            </a>
          </li>

          <li className={styles.icon}>
            <a href="https://github.com/nandhanaselvam">
              <BsGithub/>
            </a>
          </li>
        </ul>
      

      <section className={styles.info}>

        <section className={styles.logo}>#</section>
        <p>Made by Nandhana Selvam</p>
        
      </section>

      

    </footer>
  );
}
