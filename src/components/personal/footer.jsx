// import SCSS file as styles for this component
import styles from '@/styles/components/personal/footer.module.scss/'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillBehanceSquare } from "react-icons/ai";

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
      <section>
        <img className={styles.logo} src={"/android-chrome-192x192.png"} alt={"include logo"}/>
      </section>


      <section className={styles.info}>
        <p>Made by Catelyn Bu</p>

        <ul className={styles.socials}>
          <li className={styles.icon}>
            <a href="mailto:cebu@ucdavis.edu">
              < MdEmail className={styles.emailIcon}/>
            </a>
          </li>

          <li className={styles.icon}>
            <a href="https://github.com/catelynbu" target="_blank">
              <AiFillGithub className={styles.githubIcon}/>
            </a>
          </li>

          <li className={styles.icon}>
            <a href="https://www.instagram.com/catelynbu/?hl=en" target="_blank">
              <AiFillInstagram className={styles.instaIcon}/>
            </a>
          </li>

          <li className={styles.icon}>
            <a href="https://www.behance.net/catelyn-bu" target="_blank">
              <AiFillBehanceSquare className={styles.behanceIcon}/>
            </a>
          </li>
        </ul>


      </section>
    </footer>
  );
}
