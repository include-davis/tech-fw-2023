import React, { Component, useState } from 'react';
import styles from "@/styles/components/personal/my-navbar.module.scss";
import { AiOutlineMenu } from 'react-icons/ai'

const navItems = ["Socials", "Help"];

const socialHandles = ["Discord", "Instagram", "LinkedIn", "Github"];

export default function My_Navbar() {
  // DP means dropdown
  const [isSocialsDPExpanded, setisSocialsDPExpanded] = useState(false);
  const [isHelpDPExpanded, setisHelpDPExpanded] = useState(false);
  
  const socials = (array) => {
    return (array.map((elem) => <div className={styles.social_handles}>
        {elem}
      </div>))
  }

  // Makes puts items in nav
  const setNav = (array) => {
    return (array.map((elem) => <buttton className={styles.nav_items}> 
        {elem}
      </buttton>))
  }

  return (
    <nav className={styles.nav}>
      {setNav(navItems)}
      <AiOutlineMenu className={styles.nav_menu} size={60}/>
    </nav>
  )
}