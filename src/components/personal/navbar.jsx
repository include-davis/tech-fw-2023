import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/navbar.module.scss";
import Link from "next/link";
import Skills from "@/components/personal/skillset";
/*
const nav = [
  { link: "Home", href: "" },
  { link: "Skills", href: "skillset_skillsHeadingText" },
  { link: "Projects", href: "" },
  { link: "Contact Me", href: "" },
];
*/
const dropDown_items = [
  { link: "CowChow Rewards", href: "" },
  { link: "Connect N", href: "" },
  { link: "Rock Paper Scissors", href: "" },
  { link: "More", href: "" },
];

export default function Navbar() {
  //const [isDropdownOpen, openDropdown] = useState(false); //TODO - original attempt did not work LOL
  // use useState for dropdown menu - will appear under Projects navtitle

  // based off useState workshop slides + navbar src code
  const toggleDropdown = () => openDropdown(true);
  const closeDropdown = () => openDropdown(false);

  return (
    /* styles.navbar = div for entire navbar */
    <nav className={styles.navbar}>
      {/*<div className={styles.logo}>KASHVI'S PORTFOLIO</div>*/}
      <ul className={styles.nav_titles}>
        <li className={styles.links}>Home</li>
        <li className={styles.links}>Skills</li>
        <li className={styles.links}>
          Projects
          {/*{dropDown_items.map((title) => {
            return (
              <Link
                href={`/${title.href.toLowerCase()}`}
                className={styles.link}
              >
                {title.link}
              </Link>
            );
          })}{" "} */}
        </li>
        <li className={styles.links}>Contact Me</li>
      </ul>
    </nav>
  );
}
