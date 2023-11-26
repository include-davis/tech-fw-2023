import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/navbar.module.scss";
import Link from "next/link";
import DropDown from "./dropdown";

const nav_titles = [
  { link: "Home", href: "" },
  { link: "Skills", href: "skillset_skillsHeadingText" },
  { link: "Projects", href: "" },
  { link: "Contact Me", href: "" },
];

// split up into two files - navbar.jsx and dropdown.jsx bc i was losing my mind a bit :D
// useState hook used in dropdown

// TODO: issue with dropdown - currently can't click on anything in dropdown menu because it disappears when moving mouse from "Projects" title
// TODO: right now navbar_titles are not centered - might be issue with .logo div - maybe just delete it?

export default function Navbar() {
  const [dropdown, toggleDropdown] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="https://includedavis.com/about" target="_blank">
            Kashvi's Portfolio
          </Link>
        </div>
        <ul className={styles.navbar_titles}>
          {nav_titles.map((title) => {
            if (title.link === "Projects") {
              // for Projects link, toggle dropdown when hovered
              return (
                <li
                  key={title.link}
                  className={styles.titles}
                  onMouseEnter={() => toggleDropdown(true)} // DOCUMENTATION: https://legacy.reactjs.org/docs/events.html#mouse-events
                  onMouseLeave={() => toggleDropdown(false)}
                >
                  <Link href={title.href}>{title.link}</Link>
                  {dropdown && <DropDown></DropDown>}
                </li>
              );
            }

            return (
              <li key={title.link} className={styles.titles}>
                <Link href={title.href}>{title.link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
