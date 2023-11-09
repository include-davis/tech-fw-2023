import React from 'react'
import styles from '@/styles/components/personal/about.module.scss'
import { FiMail, FiInstagram, FiGithub } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logo}>logo</section>

            <section className={styles.info}>
                <p>made by naomi</p>
                <ul className={styles.footerIcons}>
                    <li> <a href="mailto:naomitan.zhao@gmail.com"><FiMail/></a> </li>
                    <li> <a href="https://www.instagram.com/naomi_zhzz/"><FiInstagram/></a> </li>
                    <li> <a href="https://github.com/naomitzhao/"><FiGithub/></a> </li>
                </ul>
            </section>
        </footer>
    );
}

/* <div className={styles.footer}>
            <div className={styles.footerIcons}>
                <FiMail/>
            </div>
            
        </div> */