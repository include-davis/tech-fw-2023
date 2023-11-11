import React from 'react';
import styles from '@/styles/components/personal/about.module.scss';
import Image from 'next/image'; // We haven't covered this yet, but since we'll be using the Nextjs framework, we use the Image component. this is how it's imported. You don't have to use it right now but you're welcome to! You just replace the img with Image in the tag name and rest is the same. 

// The structure looks good! I did notice one thing: I would recommend naming your elements with something that is descriptive of the element. 
// classNames have the same role as the comments you are taught to leave in code - you should be able to understand your code when you come back years later. We don't do comments in HTML files for a cleaner file so classNames have to suffice.
// For eg, instead of using "paragraph", you could name it "aboutme_text" so you know exactly which paragraph you're talking about. You can look at Nandhana's code for reference.
// Just something to keep in mind for the future!

export default function About() {
  return (
    <div className={styles.name}>
      <h2 className={styles.title}>HTML Designer</h2>
      <h1 className={styles.anna}>
        <br /> {/* you don't really need this here. the spacing you were trying to get can be achieved using padding and margins. Using styles gives you more freedom. Breaks in general are not used a lot because it's more convenient to just break the content into separate divs and style them.*/}
        Hello, my name is Anna Pandey
      </h1>
      <p className={styles.paragraph}>
        <br /> {/* You don't really need to add breaks in the paragraph to enter into a new line, by default the content will adjust itself inside the div. */}
        <br></br>I am currently a second-year UC Davis student majoring in Mechanical Engineering.
        However,<br></br> I am in the process of switching my major to Computer Science. A little bit
        about me other than<br></br> school is that I am really passionate about learning new skills.
        Currently, I'm fostering a hobby<br></br> to learn more coding languages to better aid my
        coding journey down the line.
      </p>
      <div className={styles.image}> { /* You don't really need a div to wrap around the image. You can apply the same styles directly to your img tag. */}
        <img src="/mypicture.jpg" alt="picture of me" /> {/* To have your image render on the page, the filepath in src should lead to an image file. you can add a picture in the public folder and then replace the path here with "/your-file-name.file-extension" */}
      </div>
    </div>
  );
}
