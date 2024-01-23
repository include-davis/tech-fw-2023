// import SCSS file as styles for this component
import styles from "@/styles/components/personal/footer.module.scss";
import Link from "next/link";
import Image from "next/image";

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
        <Link href = "https://includedavis.com/about" target = "_blank">
                <Image className= {styles.logo} src = "/Vector.svg" width = {80} height = {80} sizes = {"{max-width: 1048px} 30px, 40px"} alt = "logo"/>
        </Link>
        
      </section>
      </div>

      <section className={styles.info}>
        <ul className={styles.socials}>
          <li>
            <a href = "https://github.com/melichul" target = "_blank"> 
              <VscGithubAlt> </VscGithubAlt>
            </a>
          </li>

          <li>
            <a href="mailto:ecgomezvazquez@ucdavis.edu" target = "_blank"> 
              <BiLogoGmail> </BiLogoGmail>
            </a>   
          </li> 

          <li>
            <a href="https://www.youtube.com/" target = "_blank"> 
              <FaYoutube> </FaYoutube>
            </a>
          </li> 

        </ul>
        
        <p> made by emily </p>

      </section>
    </footer>
  );
}
