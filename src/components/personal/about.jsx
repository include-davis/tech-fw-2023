import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { BiLogoGmail } from 'react-icons/bi';


export default function About() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.nameBio}>
          <h1>Keena Vasiloff</h1>
          <h3>Computer Science</h3>
          <h5>I love to write code and build projects.</h5>
        </div>
        <div className={styles.photo}>
          <img src='https://media.licdn.com/dms/image/C5603AQHi98RrS4B0Ww/profile-displayphoto-shrink_400_400/0/1660822747098?e=1703721600&v=beta&t=X6MWIB5NtGoG_mZmg7q8FDPDbhzTRXdFrfL48Ze1iXk' alt='Keena Vasiloff'></img>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <div className={styles.skillsBox}>
          <h2>Skills</h2>
          <div className={styles.skillItem}>Python</div>
          <div className={styles.skillItem}>C++</div>
          <div className={styles.skillItem}>JavaScript</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/keena-vasiloff/" className={styles.icon}><FaLinkedin /></a>
        <a href="mailto:khvasiloff@ucdavis.edu" className={styles.icon}><BiLogoGmail /></a>
        <a href="https://github.com/TheGhostCoder0/" className={styles.icon}><FaGithub /></a>
      </footer>
    </div>
  )
}
