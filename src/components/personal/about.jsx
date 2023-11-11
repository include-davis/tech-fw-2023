import React, { Component } from "react";
import styles from "@/styles/components/personal/about.module.scss";
import Image from "next/image"; //we haven't covered this but since we are using Next.js we will be using their Image component instead of the standard <img>, so once you get to working more on your About, use <Image> instead

//ill come back to look at this in the next week once styling has been added

export default function About() {
  return (
    <div>
      <h1>Hello, my name is Martha!</h1>
      {/* I think you might have meant to use a <p> tag here as there is no p1 tag*/}
      <p1>
        I am a fourth year, working towards double majoring in CS + Film. My
        goal is to become a master in web development!
      </p1>
      <div>
        {/* Once you put in your headshot, go ahead and place it into the public folder and access it from there using src= '/[your file name]'*/}
        <img
          src="/images/MarthaFloresHeadshot.jpg"
          width={300}
          height={300}
          alt="Martha Headshot"
        />
      </div>
    </div>
  );
}
