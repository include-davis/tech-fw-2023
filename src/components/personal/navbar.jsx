import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/navbar.module.scss";
import Link from "next/link";
import Skills from "@/components/personal/skillset";
import { useRef } from "react";
import Footer from "@/components/personal/footer";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Trispace:wght@300&display=swap"
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
  {
    link: "CowChow Rewards",
    href: "https://www.figma.com/proto/tGwJKonLfpPaPIi6Q1y9CP/DI---UC-Davis-Rewards?type=design&node-id=123-152&t=FWvk2p2E3goookza-1&scaling=scale-down&page-id=78%3A6&starting-point-node-id=123%3A161&mode=design",
  },
  { link: "Connect N", href: "https://github.com/kashdw/connectN" },
  {
    link: "Rock Paper Scissors",
    href: "https://github.com/kashdw/RockPaperScissors-2.0",
  },
  { link: "More", href: "https://github.com/kashdw" },
];

export default function Navbar() {
  const [isDropdownOpen, openDropdown] = useState(false);
  // attempting to use useState for dropdown menu - will appear under Projects navtitle
  // based off useState workshop slides + navbar src code
  const toggleDropdown = () => openDropdown(true);
  const closeDropdown = () => openDropdown(false);

  // source: https://stackoverflow.com/questions/58525269/jump-to-a-specific-section-in-a-page-react
  const section1 = useRef(Skills.skillsSection);
  const section2 = useRef(null);
  const section3 = useRef(Footer.footer);

  const scrollToSection = (eleRef) => {
    // does not work rn ARGH - come back to
    window.scrollTo({
      behavior: "smooth",
    });
  };

  return (
    /* styles.navbar = div for entire navbar */
    <nav className={styles.navbar}>
      {/*<div className={styles.logo}>KASHVI'S PORTFOLIO</div>*/}
      <ul className={styles.nav_titles}>
        <li className={styles.links}>Home</li>
        <li className={styles.links} onClick={() => scrollToSection(section1)}>
          Skills
        </li>
        <li
          className={styles.links}
          onMouseEnter={toggleDropdown} // DOCUMENTATION: https://legacy.reactjs.org/docs/events.html#mouse-events
          onMouseLeave={closeDropdown}
        >
          Projects
          {isDropdownOpen && (
            <ul className={styles.dropdown}>
              {dropDown_items.map((title) => (
                <li className={styles.dropdownItem}>
                  <Link href={`/${title.href}`}>{title.link}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li
          className={styles.links} /*onClick={() => scrollToSection(section3)}*/
        >
          Contact Me
        </li>
      </ul>
    </nav>
  );
}
