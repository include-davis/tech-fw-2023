// import SCSS file as styles for this component
import styles from '@/styles/components/personal/footer.module.scss';

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
      <section className={styles.logo}><img src={"safari-pinned-tab.svg"} alt={"include-icon"} className={styles.iconImage}/></section>

      <section className={styles.info}>
        <div className={styles.socialContainer}>
          <ul className={styles.socials}>
            <li className={styles.icon}> 
              <a href="https://www.instagram.com/dql1116/" target="_blank" rel="noopener noreferrer">
                <img src={"/personal/instagram.svg"} alt={"instagram-icon"} className={styles.iconImage}/>
              </a>
            </li>
            <li className={styles.icon}>
              <a href="https://www.linkedin.com/in/davidqlee/" target="_blank" rel="noopener noreferrer">
                <img src={"/personal/linkedin.svg"} alt={"linkedin-icon"} className={styles.iconImage}/>
              </a>
            </li>
            <li className={styles.icon}>
              <a href="mailto:dqlee@ucdavis.edu">
                <img src={"/personal/gmail.svg"} alt={"gmail-icon"} className={styles.iconImage}/>
              </a>
            </li>
          </ul>
        </div>
        <p className={styles.madeBy}>Made by David Lee</p>
      </section>
    </footer>
  );
}
