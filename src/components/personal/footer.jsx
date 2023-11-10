// import SCSS file as styles for this component
import { MdClose } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import contact from "@/data/contact.json";
// import styles from "@/styles/footer.module.scss";

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
      <section className={styles.logo}>logo</section>

      <section className={styles.info}>
        <p>Made by Kashvi Dwarka</p>
        <ul className={styles.socials}>
          <li className={styles.icon}> 
            <a href={lead.linkedIn} target="_blank">
              <BsLinkedin
                fontSize={100} /*to resize the icons */
                color={"#0072b1"}
                alt={"linkedIn"}
              />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
