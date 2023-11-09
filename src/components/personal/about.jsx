import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss'
import Icons from '@/components/personal/icons'
import Footer from './footer';
import { FiHeart } from 'react-icons/fi'

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.notFooter}>
        <div className={styles.mainInfo}>
          <h1>naomi zhao</h1>
          <h2>personal page</h2>
          <p>hi, i'm naomi! welcome to my #include personal page.</p>
        </div>
        <ul className={styles.chickenList}>
          <li>
            <img src='https://stardewvalleywiki.com/mediawiki/images/f/fd/Brown_Chicken.png'></img>
            <p>i'm a second year student at uc davis. i'm majoring in computer science & engineering and minoring in economics.</p>
          </li>
          <li>
            <img src='https://stardewvalleywiki.com/mediawiki/images/2/22/White_Chicken.png'></img>
            <p>i love playing games! <FiHeart/> recently i've been playing valorant and stardew valley. all of the pixel images on this page are from sdv.</p>
          </li>
          <li>
            <img src='https://stardewvalleywiki.com/mediawiki/images/f/fd/Brown_Chicken.png'></img>
            <p>hover on the fruit to see a css animation :)</p>
          </li>
        </ul>

        <Icons></Icons>
      </div>
      <Footer></Footer>
    </div>
  )
}

// npm run dev