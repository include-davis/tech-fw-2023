// import SCSS file as styles for this component
import styles from "@/styles/components/personal/footer.module.scss";
import Image from "next/image";
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

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
      <a href="https://github.com/C3viche" target="_blank" className={styles.socials}>
        <AiFillGithub size={48}/>
      </a>
      <a href="https://includedavis.com" target="_blank" className={styles.socials}>
        <Image
          src="/favicon-32x32.png"
          width={30}
          height={30}
          alt={"#include icon"}
        />
      </a>
      <a href="https://www.linkedin.com/in/cristian-embleton/" target="_blank" className={styles.socials}>
        <AiFillLinkedin size={48}/>
      </a>
    </footer>
  );
}
