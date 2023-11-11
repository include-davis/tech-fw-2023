// import SCSS file as styles for this component
import React, { Component } from "react";
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
  <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
  return (
    <footer className={styles.footer}>
      <section className={styles.logo}>logo</section>
      
      
      
      <section className={styles.info}>
        <p>Made by Esther Whang</p>
        <ul className={styles.socials}>
          <li className={styles.icon}> 
            <a href=""><i class = "fa-instagram"></i></a>
          </li>
        </ul>
      </section>
    </footer>



  );
}
