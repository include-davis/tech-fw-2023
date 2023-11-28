import styles from '@/styles/components/personal/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { MdMenu} from 'react-icons/md';
import { RxCross2 }from 'react-icons/rx';
import { useState } from 'react';

/*
const navLinks = [
  {name: "Home", href: "/home"}, 
  {name: "About", href: "/about"}, 
  {name: "Contact", href: "/contact"}, 
  {name: "Services", href: "/services"}
]
*/

export default function Navbar({links}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => (!prev));
  }

  return(
    <nav className={styles.nav}>
      <Image className={styles.logo} width={40} height={40} src={'/personal/logo.png'}/>

      <div className={styles.rightSide}>
        <div className={styles.mobileMenu} onClick={handleOpen}>
          {isOpen ? <RxCross2 /> : <MdMenu />}
        </div>
        <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          {links.map((link, index) => {
            // const {name, href} = link;
            return(
              <li className={styles.navLink} key={`Link ${index+1}`}>
                <Link href={`${link.href}`}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}