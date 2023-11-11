import React, { Component } from "react";
import styles from "@/styles/components/personal/about.module.scss";
import Image from "next/image";
//i explain the use of this in a later comment^

// import styles from '/Users/krishna/Desktop/untitled folder/tech-fw-2023/src/styles/components/personal/about.module.scss';
//we are covering imports and paths in this week's workshop so no worries if you couldn't get the path right! The '@' symbol is used to indicated that you are starting off in 'src' which is what we defined in the jsconfig file

//Some general pointers:
//Great use of utilizing classNames! It is important, however, to use meaningful names. For example, instead of 'h', you can try using 'job_title'.

//I noticed you used <br> in your text. This is okay, but I think you just wanted to wrap your text at a certain point. Instead of <br>, you can add a width to the container holding your text in your css file. That way, everything can wrap and be aligned nicely.

export default function About() {
  return (
    <div>
      <div>
        {/* You identified a great way to split up the text, so good job! A suggestion would be to move all of your <p> elements into the same <div> (so move .font1 and .box) here and give the div a className along the lines of "text" or something like that. */}
        <span className={styles.h}>
          <strong>UI/UX DESIGNER</strong>
          {/* <strong> definitely works. Instead I would say you can use the font-weight property in your CSS if you want bold text. <strong> is usually used for elements of high importance like warnings and some screen readers will also recognize these tags and say them differently. */}
        </span>
      </div>

      <p className={styles.font}>
        Hello, my name <br />
        is Krishna Gupta
      </p>

      <p className={styles.font1}>
        I am very passionate about web development,
        <br />
        love to do projects related to it,
        <br />
        and I am also interested in computer vision, <br />
        and the application of AI/ML in different fields.
      </p>

      <p className={styles.box}>Contact Me</p>
      {/* Since contact me is a button, i would suggest using the <button> tag instead */}

      <div className={styles.pic}>
        <img src="/pic.jpeg" alt="Description" />
        {/* Since we are using Next.js, you can actually import the Image component instead. It's optimized, so we'll use the Image component instead in the future. This wasn't covered, so no worries! You used <img> perfectly!*/}
      </div>
    </div>
  );
}
