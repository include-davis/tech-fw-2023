import React, { Component } from "react";
import styles from "@/styles/components/personal/about.module.scss";
import Image from "next/image"; //imported this and I explain in a comment

// I love the picture of the cat so much. Awesome work here! I'm happy you added your personal touch to it and got creative!!

//Structure looks really good and good job on making classNames with meaningful descriptions

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.text}>
        <h2 className={styles.jobtitle}>
          Computer Science and Engineering Student
        </h2>

        <h1 className={styles.hello}>
          Hello, my name is Nandhana Selvam
        </h1>

        <p className={styles.hello_description}>
          I am a third year Computer Science and Engineering student at
          UC Davis!
        </p>
        {/* DONE: Since this is a button, I recommend using the <button> tag instead and if you have a link you want to add in here then you can do <a><button></button></a> or ultimalteyl just use <a> and style that instead */}
        <a href="mailto:nandhanaselvam@gmail.com"className={styles.contact_button}>
          <button>
          Contact Me!
          </button>
        </a>
      </div>
      {/* we didnt cover this yet but in Next.js, there is an Image component which is what we'll be using in the future, i added the import line at the top in case you wanted to use it.  */}
      <div className={styles.filler_image}>
        <img
          src="https://cdn.discordapp.com/attachments/686370685991256171/1168472608027713546/IMG_1404.jpg?ex=6551e3ea&is=653f6eea&hm=5af355af6c50e6755e0f560dc9930bbfd8f7a44016e481bcc483db9a0770d65d&"
          alt="temporary image until personal image is added"
        />
      </div>
    </div>
  );
}
