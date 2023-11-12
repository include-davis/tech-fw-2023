import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

// seems like you didn't get a chance to finish this. Let me know once you're done and I will go over your code.

export default function About() {
    return (
      <div className = {styles.about_main_container}>
        <div className = {styles.image_container}> </div> 
        <div className = {styles.about_container}> 
          <div className = {styles.intro}>
            <p  className = {styles.greeting}> Hello, my name is </p>
            <h1  className = {styles.name}> Emily Gomez </h1>
            </div> 
            <div className = {styles.desc}> 
              <p> Programmer and problem solver based in Davis, California. </p> 
            </div> 
          </div>
      </div>
    )
}
