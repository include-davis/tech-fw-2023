import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss'
import Icons from '@/components/personal/icons'

export default function About() {
    return (
      <div className={styles.style}>
        <h1>naomi zhao</h1>
        <h2>personal page</h2>
        <div><text>hi, i'm naomi! i'm a class of 2026 computer science & engineering major. lorem ipsum dolor sit amet, consectetur adipiscing elit.</text></div>
        <Icons></Icons>
      </div>
    )
}

// npm run dev