import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
  return (
    <div className={styles.style}>

    <h1>Brian Dean Nguyen</h1>
    <br></br>
    <h2>Welcome to My Personal Page!</h2>

    <div>
      <p>Hello, My name is Brian. I am a fourth year transfer student majoring in Computer
        Science and minoring in Tech management. On my free time I like to spend time with
        friends, go on long walks and take spontaeous trips. My hobbies are cooking, reading,
        Boxing, MMA and reading. Fun fact about me is, I go to the gym everyday to lift weights
        but I don't necessarily like it. I have a dog named Butters.
      </p>
      <br></br>
      <text>Looking forward to meeting all of you!</text>
    </div>

    </div>
  )
}

//npm install
//npm run dev
//localhost/personal