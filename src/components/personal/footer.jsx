// import SCSS file as styles for this component
import styles from "@/styles/components/personal/footer.module.scss";

import { VscGithubAlt } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

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

    <img src="" alt = "logo"/>
  */ 
  return (
    <footer className={styles.footer}>
      <div> 
      <section className={styles.logo}>
        
      </section>
      </div>

      <div> 
      <section className={styles.info}>
        <p>Made by Emily</p>
        <ul className={styles.socials}>
          <li>
            <VscGithubAlt> </VscGithubAlt>
          </li>

          <li>
            <BiLogoGmail> </BiLogoGmail>
            </li> 

          <li>
            <FaYoutube> </FaYoutube>
          </li> 
        </ul>
      </section>
      </div> 
    </footer>
  );
}
