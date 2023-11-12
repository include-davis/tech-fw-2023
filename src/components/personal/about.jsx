import React, { Component } from "react";
import about from "../../styles/components/personal/about.module.scss";
const logo = require("../../styles/components/personal/about-selfie.jpg");

export default function About() {
  return (
    <div className={about.container}>
      <div className={about.about}>
        <div className={about.selfie}>{/*Couldn't get the img tag to work*/}</div>
        <div className={about.text}>
          <div className={about.title}>
          {/* another way you could have done this is use the <span> tag which just means span across these elements.
          
          So, you could encase everything in the same <p> tag:
          <p className={}> ~ my name is <span className={}> Sreya Matthew</span> ~<p>

          This just reduces the code down a bit and I wanted you to know that it is something you can do too
          */}
            <p className={about.titleText}>~</p>
            <p className={about.titleText}>my name is</p>
            <p className={about.titleName}>Sreya Mathew</p>
            <p className={about.titleText}>~</p>
          </div>
          <p className={about.summary}>
            I am a 2nd year Computer Science & Engineering student at UCD, who would
            love to utilize my learned skills to make meaningful/innovative projects
            that can help society! In my spare time, I love arts like crocheting and
            baking. Looking forward to connecting with you :)
          </p>
        </div>
      </div>
    </div>
  );
}
