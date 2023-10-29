import React, { Component } from 'react';
import about from '../../styles/components/personal/about.module.scss';

export default function About() {
    return (
      <div className={about.about}>
        <div className={about.title}>
          <p className={about.titleText}>~</p>
          <p className={about.titleText}>my name is</p>
          <p className={about.titleName}>Sreya Mathew</p>
          <p className={about.titleText}>~</p>
        </div>
        <p className={about.summary} >I am a 2nd year Computer Science & Engineering student at UCD, who would love to utilize my learned skills to make meaningful/innovative projects that can help society! In my spare time, I love arts like crocheting and baking. Looking forward to connecting with you :)</p>  
      </div>
    )
}
