import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/navbar.module.scss";
import Link from "next/link";

const nav = [
  { link: "Home", href: "" },
  { link: "Skills", href: "" },
  { link: "Projects", href: "" },
  { link: "Contact Me", href: "" },
];

const dropDown_items = ["CowChow Rewards", "Connect N", "Rock Paper Scissors"];

export default function Navbar() {
  // const [active, setActive] = useState(false);

  const list = (array) => {
    return array.map((elem) => <li>{elem}</li>);
  };

  const dropDown = () => {
    return (
      <ul className={styles.dropDown}>
        {dropDown_items.map((numWeek, index) => (
          <Link href={`/week/${numWeek}`} key={`Week ${index}`}>
            <li>Week {numWeek}</li>
          </Link>
        ))}
      </ul>
    );
  };
  return (
    /* styles.navbar = div for entire navbar */
    <nav className={styles.navbar}>
      <div className={styles.logo}>KASHVI'S PORTFOLIO</div>
    </nav>
  );
}
