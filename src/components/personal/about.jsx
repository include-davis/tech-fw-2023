import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
    return (
      <div>
        <h3 class="intro"> 
          hello, my name is 
        </h3>

        <h1 class="name"> 
          emily
        </h1> 

        <p class="about_me"> 
        I'm an undergraduate student majoring in computer science. 
        </p>

      </div>
    )
}
