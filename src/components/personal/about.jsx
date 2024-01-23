import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";


export default function About() {
    return (
        <div className = {styles.about_main_container}>
             
          <div className = {styles.about_info_container}> 
              <div className = {styles.greeting_name_container}>
                  
                <div className={styles.greeting}> <b> hello! ¡hola! こんにちは！ I'm</b>  </div>
                <div className={styles.name}> EMILY GOMEZ </div>
                <div className={styles.desc}> 
                  i'm a <u className= {styles.underlineDecor}>programmer</u> and <u className= {styles.underlineDecor}> problem solver</u>. based in the bay area. 
                </div>
              </div>
          </div>
        </div>
    )
}
