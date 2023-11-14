// import SCSS file as styles for this component
import styles from "@/styles/components/personal/footer.module.scss";

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
      <section className={styles.logo}>
        <img src={"../public/android-chrome-192x192.png"} />
      </section>
      <section className={styles.info}>
        <p>made by erika</p>
        <ul className={styles.socials}>
          <li className={styles.github}>
            <a href={"https://github.com/erikagosti"} target="_blank">
              <div className={styles.icon}>
                github
              </div>
            </a>
          </li>
          <li className={styles.linkedin}>
            linkedin
          </li>
          <li className={styles.facebook}>
            facebook
          </li>
          <li className={styles.handshake}>
            handshake
          </li>
        </ul>
      </section>
    </footer>
  );
}
