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
          <div className={styles.github}>
            <a href={"https://github.com/erikagosti"} target="_blank">
              <div className={styles.icon}>
                github
              </div>
            </a>
          </div>
          <div className={styles.linkedin}>
            <a href={"https://www.linkedin.com/in/erika-gosti-233a05209/"} target="_blank">
              <div className={styles.icon}>
                <img className={styles.linkedinIcon} src={"/personal/linkedin-logo-removebg-preview.png"}/>
              </div>
            </a>
          </div>
          <div className={styles.facebook}>
            <a href={"https://www.facebook.com/erikagostii/"} target="_blank">
              <div className={styles.icon}>
                <img className={styles.facebookIcon} src={"/personal/facebook-logo-removebg-preview.png"}/>
              </div>
            </a>
          </div>
          <div className={styles.handshake}>
            <a href={"https://ucdavis.joinhandshake.com/stu/users/49430444"} target="_blank">
              <div className={styles.icon}>
                <img className={styles.handshakeIcon} src={"/personal/handshake-logo.png"}/>
              </div>
            </a>
          </div>
        </ul>
      </section>
    </footer>
  );
}
