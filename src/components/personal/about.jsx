// import React from 'react';
// import styles from '@/styles/components/personal/about.module.scss'; // Adjust the path based on your project structure
// import Image from 'next/image'; // We haven't covered this yet, but since we'll be using the Nextjs framework, we use the Image component. this is how it's imported. You don't have to use it right now but you're welcome to! You just replace the img with Image in the tag name and rest is the same. 
import React from 'react';
import styles from '@/styles/components/personal/about.module.scss'; // Adjust the path based on your project structure

// structure looks good!
// One thing about the way you used classnames: you want to make sure they are descriptive enough that you don't have to spend much time trying to remember which name corresponds to which element. It also helpful for a more readable CSS file. 
// For eg, instead of using "font1", you can use "aboutme_text" for the UI/UX Designer element. What you have is too generic for anyone to easily connect the code to the visual rendering.




export default function About() {
  return (

    <div className={styles.bg}>

      <span className={styles.h}>
        <strong>UI/UX DESIGNER</strong>
      </span>

      
      <div>
        <p className={styles.font}>
          Hello, my name <br />
          is Krishna Gupta
        </p>
      </div>

      <p className={styles.font1}>
        I am very passionate about web development,
        <br />
        love to do projects related to it,
        <br />
        and I am also interested in computer vision, <br />
        and the application of AI/ML in different fields.
      </p>

      <p className={styles.box}>Contact Me</p>

      <div className={styles.pic}>
        <img src="/pic.jpeg" alt="Description" />
        <p>
          I am very passionate about web development,<br />
          love to do projects related to it,
          <br />
          and I am also interested in computer vision, <br />
          and the application of AI/ML in different fields.
        </p>
      </div>



    </div>
  );
}


