import React, { Component } from 'react';
import styles from "@/styles/components/personal/about.module.scss";
import Image from "next/image";

export default function About() {
    return (
      <div>

        <style jsx global>
          {`
              body {
                  background-color: rgb(238, 238, 238);
              }
           `}
        </style>
        
        <div className={styles.box}>
          <h2 className={styles.profession}>
              <strong>UI/UX Designer</strong>
          </h2>
          <h1 className={styles.name}>Hello, my name is Cristian Embleton</h1>
          <p className={styles.description}>Currently studying computer software and hardware engineering. Always looking for ways to learn more.</p>
        
        </div>
        
        <div className={styles.img_container}>
          <Image className={styles.image_bg}
            src="/purple_circle.png"
            width={100}
            height={100}
            alt={"backdrop"}
          />
          <Image className={styles.image}
            src="/cristian.png"
            width={250}
            height={241}
            alt={"portfolio picture"}
          />
        </div>
      </div>
    )
}
