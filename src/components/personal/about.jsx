import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss';



export default function About() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.nameBio}>
          <h1>Keena Vasiloff</h1>
          <h3>Computer Science</h3>
          <h5>I love to write code and build projects.</h5>
          <a href={"https://theghostcoder0.github.io/PersonalPortfolio/"} target="_blank">
            <button>View My Personal Website </button>
          </a>
        </div>
        <div className={styles.photo}>
          <img src='https://media.licdn.com/dms/image/C5603AQHi98RrS4B0Ww/profile-displayphoto-shrink_400_400/0/1660822747098?e=1703721600&v=beta&t=X6MWIB5NtGoG_mZmg7q8FDPDbhzTRXdFrfL48Ze1iXk' alt='Keena Vasiloff'></img>
        </div>
      </div>
    </div>
  )
}