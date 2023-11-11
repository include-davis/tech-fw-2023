import React from 'react';
import styles from '@/styles/components/personal/about.module.scss'; // Adjust the path based on your project structure
import Image from 'next/image'; // We haven't covered this yet, but since we'll be using the Nextjs framework, we use the Image component. this is how it's imported. You don't have to use it right now but you're welcome to! You just replace the img with Image in the tag name and rest is the same. 

// structure looks good!
// One thing about the way you used classnames: you want to make sure they are descriptive enough that you don't have to spend much time trying to remember which name corresponds to which element. It also helpful for a more readable CSS file. 
// For eg, instead of using "font1", you can use "aboutme_text" for the UI/UX Designer element. What you have is too generic for anyone to easily connect the code to the visual rendering.

export default function About() {
  return (
    <div className={styles.bg}>
      <div> { /* I like how you tried out all kinds of tags! but you could use just one tag here like <h1> and handle everything else in styles. Always try to minimise the number of tag and divs you use for one element for code readability. */}
        <span className={styles.h}>
          <strong>UI/UX DESIGNER</strong>
        </span>
      </div>

      <p className={styles.font}>
        Hello, my name <br />
        is Krishna Gupta
      </p>

      {/* word of caution about <br> - it seems like you're trying to limit your text to a certain space horizontally using breaks. I would suggest specifying the width of your element instead and letting the text adjust itself. Using breaks makes incorporating responsiveness harder since your text will end abruptly in a differently sized device. */}
      <p className={styles.font1}>
        I am very passionate about web development,
        <br />
        love to do projects related to it,
        <br />
        and I am also interested in computer vision, <br />
        and the application of AI/ML in different fields.
      </p>

      {/* The styling of the box seems to suggest it's a button so you want to implement that here. You could make it redirect the user to some link if you want, in which case you can use the tags <button> and <a>. If you want help with this, let me know. */}
      <p className={styles.box}>Contact Me</p>

      <div className={styles.pic}>
        <img src="/pic.jpeg" alt="Description" />
        {/* I think you forgot to delete this: */}
        <p>
          I am very passionate about web development,<br />
          love to do projects related to it,
          <br />
          and I am also interested in computer vision, <br />
          and the application of AI/ML in different fields.
        </p>
      </div>

      {/* The skills section is supposed to go in the skillset.jsx file which is in the same folder as this file. Since, you weren't at the last workshop and the recording was wacky, you'll need to merge updates from the main into your branch to see those files. Let me know if you need help if with. */}
      <div className={styles.skill}>
        <strong>Skills</strong>
      </div>

      <div className={styles.content_box}>
        <div className={styles.pic1}>
          <img src="/CSS.png" alt="Description" />
        </div>
        <div className={styles.pic2}>
          <img src="/flask.png" alt="Description" />
        </div>
        <div className={styles.pic3}>
          <img src="/HTML.png" alt="Description" />
        </div>
        <div className={styles.pic4}>
          <img src="/Javascript.png" alt="Description" />
        </div>
        <div className={styles.pic5}>
          <img src="/next.png" alt="Description" />
        </div>
        <div className={styles.pic6}>
          <img src="/react.jpeg" alt="Description" />
        </div>
      </div>
    </div>
  );
}
