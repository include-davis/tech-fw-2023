import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/navbar.module.scss";
import Link from "next/link";

const nav = [
  { link: "Home", href: "" },
  { link: "Skills", href: "" },
  { link: "Projects", href: "" },
  { link: "Contact Me", href: "" },
];

const dropDown_items = [
  "CowChow Rewards",
  "Connect N",
  "Rock Paper Scissors",
  "More",
];

export default function Navbar() {
  const [isDropdownOpen, openDropdown] = useState(false); //use useState for dropdown menu

  return (
    /* styles.navbar = div for entire navbar */
    <nav className={styles.navbar}>
      {/*<div className={styles.logo}>KASHVI'S PORTFOLIO</div>*/}
      <ul className={styles.nav_titles}>
        {/* not sure if map function is being used correctly here? tried to go based off how the #include website's navbar works (per the source code)*/}
        {nav.map((title) => {
          // what im trying to do: take in each element (title) from nav const and return it as a list element that is also a hyperlink (so its clickable)
          return (
            <li>
              <Link
                href={`/${title.href.toLowerCase()}`}
                className={styles.link}
              >
                {title.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
