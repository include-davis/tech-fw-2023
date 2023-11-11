// import SCSS file as styles for this component
import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
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
      <section className={styles.logo}>logo</section>
      <BsInstagram></BsInstagram>
      <SiGmail></SiGmail>
      <li>
    <a href ={lead.Instagram} target="_blank">
              <BsInstagram></BsInstagram>
              fontSize={100}
              color={"#0072b1"}
              alt={"Instagram"}
            </a>
          </li>

          <li>
            <a href = {lead.Gmail} target='blank'>
            <SiGmail></SiGmail>
              fontSize={100}
              color={"#0072b1"}
              alt={"Gmail"}
            </a>
          </li>

      <section className={styles.info}>
        <p>Made by Anna Pandey</p>
        <ul className={styles.socials}>
          <li className={styles.icon}> SOCIAL MEDIA ICONS + REDIRECTING </li>
        </ul>
      </section>
    </footer>
  );
}
