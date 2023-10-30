import React, { Component } from 'react';
import styles from '@/styles/components/personal/about.module.scss'

export default function About() {
    return (
      <div className={ styles.profile }>
        <img src='https://media.licdn.com/dms/image/C5603AQHi98RrS4B0Ww/profile-displayphoto-shrink_400_400/0/1660822747098?e=1703721600&v=beta&t=X6MWIB5NtGoG_mZmg7q8FDPDbhzTRXdFrfL48Ze1iXk'></img>
        <h1>Keena Vasiloff</h1>
        <h3>Computer Science</h3>
      </div>
    )
}
