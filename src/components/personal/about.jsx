import React, { Component } from "react";
import Image from "next/image";
import styles from "@/styles/components/personal/about.module.scss";

export default function About() {
    return (
      <div>
        <div class="title">Hello, my name is Kashvi Dwarka!</div>
        <div class="subtitle">I'm a third year student at UC Davis studying computer science. 
            Scroll to see more about my skills and projects :D </div>
        <button>Contact Me!</button>
      </div>
    )
}
