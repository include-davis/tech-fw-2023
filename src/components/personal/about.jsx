
import React, { useState } from 'react';
import styles from '@/styles/components/personal/about.module.scss'
import { FiHeart } from 'react-icons/fi'


export default function About() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className={styles.aboutWrapper}>
        <section className={styles.mainInfo}>
          <h1>naomi zhao</h1>
          <h2>personal page</h2>
          <p>hi, i'm naomi! welcome to my #include personal page.</p>
        </section>
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
            <p>try hovering on these chickens to see a funny animation! :)</p>
          </li>
          <li>
            <img src='https://stardewvalleywiki.com/mediawiki/images/2/22/White_Chicken.png'></img>
            <section className={styles.buttonText}>
              <button onClick={() => {setClicks(clicks+1);}}>click me!</button>
              <text>you've clicked the button {clicks} times</text>
            </section>
          </li>
        </ul>
    </div>
  )
}

// npm run dev