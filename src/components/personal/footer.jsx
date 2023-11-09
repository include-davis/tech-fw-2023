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
      <section>
        <div>
          <img className={styles.mainLogo} alt="#include logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Number_sign.svg/220px-Number_sign.svg.png"/>
        </div>
      </section>

      <section className={styles.info}>
        <div>
        <p>Made by Anna</p>
        <div className={styles.socials}>
          {/* <li className={styles.icon}> SOCIAL MEDIA ICONS + REDIRECTING </li> */}
          <a className={styles.link} target="_blank" href="https://github.com/anna-c2"><img className={styles.logo} alt="github logo" src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"/></a>
          <a className={styles.link} target="_blank" href="https://www.linkedin.com/in/anna-cai2/"><img className={styles.logo} alt="linkedin logo" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"/></a>
        </div>
        </div>
      </section>
    </footer>
  );
}
