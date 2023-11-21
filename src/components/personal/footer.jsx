import React from 'react'
import styles from '@/styles/components/personal/footer.module.scss'
import { FiMail, FiInstagram, FiGithub, FiHeart } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logo}>logo</section>
            <section className={styles.info}>
                <p>made by naomi <FiHeart/></p>
                <ul className={styles.footerIcons}>
                    <li> <a href="mailto:naomitan.zhao@gmail.com"><FiMail/></a> </li>
                    <li> <a href="https://www.instagram.com/naomi_zhzz/"><FiInstagram/></a> </li>
                    <li> <a href="https://github.com/naomitzhao/"><FiGithub/></a> </li>
                </ul>
            </section>
        </footer>
    );
}
