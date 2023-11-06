// import SCSS file as styles for this component
import styles from '@/styles/components/personal/footer.module.scss/'

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
        <p>Made by Catelyn Bu</p>

        <ul className={styles.socials}>
          <li className={styles.icon}>
            <a href="mailto:cebu@ucdavis.edu">cebu@ucdavis.edu</a>
          </li>

          <li className={styles.icon}>
            <a href="https://github.com/catelynbu">github</a>
          </li>

          <li className={styles.icon}>
            <a href="https://www.instagram.com/catelynbu/?hl=en">instagram</a>
          </li>
        </ul>

      </section>
    </footer>
  );
}
