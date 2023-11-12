// import SCSS file as styles for this component
import styles from "../../styles/components/personal/footer.module.scss";
import { FaGithubAlt } from "react-icons/fa";
import { PiLinkedinLogoDuotone } from "react-icons/pi";

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
      <img
        className={styles.logo}
        src="/favicon-32x32.png"
        alt="include-logo"
      />

      <section className={styles.info}>
        <p>Made by #Sreya Mathew#</p>
        <ul className={styles.socials}>
          <li> <a href="https://github.com/tiramisuuuuuuu/" target="_blank"><FaGithubAlt className={styles.icon} /></a> </li>
          <li> <a href="https://www.linkedin.com/in/sreya-mathew-884509293/" target="_blank"><PiLinkedinLogoDuotone className={styles.icon} /></a> </li>
        </ul>
      </section>
    </footer>
  );
}
