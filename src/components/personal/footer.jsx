// import SCSS file as styles for this component
import styles from '@/styles/components/personal/footer.module.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaHashtag } from 'react-icons/fa';



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
        <div>
          <FaHashtag className={styles.logo} />
        </div>
      </section>

      <section className={styles.info}>
          <div className={styles.socials}>
          <a className={styles.link} target="_blank" href="https://github.com/anna-c2"> <FaGithub className={styles.logo} /> </a>
          <a className={styles.link} target="_blank" href="https://www.linkedin.com/in/anna-cai2/"><FaLinkedin className={styles.logo} /></a>
        </div>     
      </section>
    </footer>
  );
}
