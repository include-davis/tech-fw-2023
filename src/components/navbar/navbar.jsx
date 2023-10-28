import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/navbar/navbar.module.scss";

const nav = [
  { link: "Home", href: "" },
  { link: "Workshops", href: "workshop" },
  { link: "Resources", href: "resources" },
];

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src="/Vector.svg"
          width={40}
          height={40}
          sizes={"{max-width: 1048px} 30px, 40px"} 
          alt="logo"
          className={styles.logo}
        />
      </Link>
      
      <ul className={styles.links}>
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={`/${item.href.toLowerCase()}`}
                className={styles.link}
              >
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <section className={styles.contact}>
        <Link href="/contact">
          <button className={styles.btn}>Contact Us</button>
        </Link>
      </section>
    </nav>
  );
}
