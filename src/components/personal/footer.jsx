import React from 'react';
import styles from'@/styles/components/personal/footer.module.scss';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.logo}>
        <Image
          src="/Vector.svg"
          width={40}
          height={40}
          sizes="{max-width: 1048px} 30px, 40px"
          alt="logo"
          className={styles.logo}
        />
      </section>
      <section className={styles.info}>
        <p>made by vivica</p>
        <ul className={styles.footerIcons}>
          <li>
            <a href="YOUR_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="YOUR_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="YOUR_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
