import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/navbar.module.scss";
import Link from "next/link";
import Skills from "@/components/personal/skillset";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins&family=Trispace:wght@300&display=swap"
  rel="stylesheet"
></link>;

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

// DOCUMENTATION: https://legacy.reactjs.org/docs/events.html#mouse-events

export default function Navbar() {
  const [isDropdownOpen, openDropdown] = useState(false); //TODO - original attempt did not work LOL
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
        <li
          className={styles.links}
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdown}
        >
          Projects
          {isDropdownOpen && (
            <ul className={styles.dropdown}>
              {dropDown_items.map((title) => (
                <li className={styles.dropdownItem}>
                  <Link href={`/${title.href.toLowerCase()}`}>
                    {title.link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={styles.links}>Contact Me</li>
      </ul>
    </nav>
  );
}
