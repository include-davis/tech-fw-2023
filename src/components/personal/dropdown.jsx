import React, { Component, useState } from "react";
import styles from "@/styles/components/personal/dropdown.module.scss";
import Link from "next/link";
import { useRef } from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Trispace:wght@300&display=swap"
  rel="stylesheet"
></link>;

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

export default function DropDown() {
  return (
    <div>
      <ul className={styles.projectDropdown}>
        {dropDown_items.map((title) => {
          return (
            <li key={title.link}>
              <Link href={title.href} className={styles.dropDown_titles}>
                {title.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
