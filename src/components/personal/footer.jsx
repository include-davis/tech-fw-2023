// import SCSS file as styles for this component

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
        <a href="https://includedavis.com/">
          <img src="Vector.svg" alt="Include logo" className='svg'/>
        </a>
      </section>

      <section className={styles.info}>
        <p>Made by Keena Vasiloff</p>
        <ul className={styles.socials}>
          <li className={styles.icon}>
            <a href="https://www.linkedin.com/in/keena-vasiloff/">
              <FaLinkedin />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="mailto:khvasiloff@ucdavis.edu">
              <BiLogoGmail />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://github.com/TheGhostCoder0/">
              <FaGithub />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
