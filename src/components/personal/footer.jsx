// import SCSS file as styles for this component
import React, { Component } from "react";
import styles from "@/styles/components/personal/footer.module.scss";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
<link rel = "stylesheet" type = "text/css" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>

export default function Footer() {
  // Make a footer!

  /* Steps
    1. Import #include logo for your footer: Can choose logo for yourself
    2. Add your name to the footer
    3. Add social media icons to the footer
    4. Add links to your social media icons

    List of helpful tags:
    <img />: Image
    <a />: Links
    <li> </li>: List elements (MUST BE WRAPPED AROUND UL/OL TAG)
    <div> </div>: 
  */
  
  return (
    
    <footer className={styles.footer}>
      
      <section className={styles.logo}>
      <Image
              src="/dog.jpeg"
              className={styles.heroImg}
              width={50}
              height={50}
              alt="heroImg"
            />
      </section>
      
  
      <section className={styles.info}>
        <p>Made by Esther Whang</p>
        <ul className={styles.socials}>
          <li className={styles.icon}> 
          <a href = "https://www.linkedin.com/in/esther-whang-b1b03220b/" target = "_blank">
            <BsLinkedin
              fontSize={30}
              color = {"#000000"}
              alt = {"linkedIn"}
              />
          </a>
          <a href = "https://www.instagram.com/e_whang23/" target = "_blank">
            <BsInstagram
              fontSize={30}
              color = {"#000000"}
              alt = {"linkedIn"}
              />
          </a>
          <a href = "https://www.facebook.com/profile.php?id=100013539512054" target = "_blank">
            <BsFacebook
              fontSize={30}
              color = {"#000000"}
              alt = {"linkedIn"}
              />
          </a>
        </li>  
        </ul>
      </section>
    </footer>
    



  );
}
