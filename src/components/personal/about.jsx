import React, { Component } from "react";
import styles from "@/styles/components/personal/about.module.scss";

// seems like you didn't get a chance to finish this. Let me know once you're done and I will go over your code.

export default function About() {
    return (
      <div className = {styles.about_main_container}>
        <div className = {styles.image_container}> 
          <img src="Users/emilygomez/Documents/include/placeholder.jpg " alt = "placeholder_image"/>
        </div> 
        
        <div className = {styles.about_container}>
          <div className = {styles.intro}>
            <p  className = {styles.greeting}> Hello! My name is </p>
            <h1  className = {styles.name}> Emily Gomez </h1>
            </div> 
            <div className = {styles.desc}> 
              <p> Programmer and <b> problem </b> solver. </p> 
            </div> 
          </div>
      </div>
    )
}
