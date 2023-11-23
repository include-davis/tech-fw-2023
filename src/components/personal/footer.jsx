
import React from 'react';
import styles from '@/styles/components/personal/footer.module.scss';
import { FaLinkedin,FaGithubSquare,FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (

    <div className={styles.bg}>
    
      <div className={styles.contact}>
        <strong>Contact</strong>
      </div>

      <div className={styles.content_box1}>
        <div className={styles.c1}>
          <strong>Get in touch</strong>
        </div>

        <div className={styles.p1}>
          <p>
            I would love to hear about your project and how I<br/>
            could help. Please fill in this form, and I'll get back<br/>
            to you as soon as possible. <br/>
          </p>

          <div className={styles.linkdin}> 
          <FaLinkedin/>
          </div>

          <div className={styles.FaGithubSquare}> 
          <FaGithubSquare/>
          </div>

          <div className={styles.IoIosMail}> 
          <IoIosMail/>
          </div>

          <div className={styles.FaInstagram}> 
          <FaInstagram/>
          </div>

      </div>

        <p className={styles.box1}>Submit</p>
      </div>
    
    </div>
  );
}
