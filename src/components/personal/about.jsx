import React, { Component } from "react";
import Image from "next/image"; // glad to see you using Image!

import styles from "@/styles/components/personal/about.module.scss";

// good work, love the picture of the puppy!

// a few things i noticed in your code:
// your classNames made me laugh but you dont want to pull that in the industry lol. you should use something that describes your element so that its easier to connect the code to the visual rendering of the code. for example, "bread" could be "name_text".
// instead of breaking your multi-line text into two elements, you can specify the width of a single element of text and let the text adjust itself within those confines.
// breaks are not used very often and mostly only to break long texts into paragraphs. for example, you could achieve that spacing between the title and the text using margin in the styles.

export default function About() {
  return (
    <div>
      <div className={styles.butter}> 
        <h1 className={styles.bread}>Hello, my name</h1>
        <h1 className={styles.bread}>is Esther Whang</h1>
        <br></br>
        <body className={styles.bruh}>
          <div>I'm a senior majoring in CS at UC Davis. </div>
          <div>I'm pursuing a career in the tech industry and hope to</div>
          <div>become a successful tech girlie! </div>
        </body>
        
        <br></br>
        <body className={styles.body2}>
          <div>Some fun facts about me: I love boba, rewatching</div>
          <div>New Girl, and hanging out with friends!</div>
      </body>
      </div>
      <div className={styles.wine}>
      <Image
              src="/dog.jpeg"
              className={styles.heroImg}
              width={450}
              height={450}
              alt="heroImg"
            />
      </div>
      
    </div>
  );
}
