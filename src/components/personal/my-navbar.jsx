import React, { Component, useState, useEffect, useRef} from 'react';
import Link from "next/link";
import styles from "@/styles/components/personal/my-navbar.module.scss";
import { AiOutlineMenu } from 'react-icons/ai'

const navItems = [
  {name: "Home", route: "/personal"},
  {name: "Help", route: "/help"},
  {name: "Services", route: "/services"}
];

const DropdownMenu = () => {
  const dropdownRef = useRef(null); // will be used to close dropdown when clicking outside
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       console.log(e);
//       // If the active element exists and is clicked outside of
//       if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
//         setIsActive(!isActive);
//       }
//     };
    
//     // If the item is active (ie open) then listen for clicks
//     if (isActive) {
//       window.addEventListener('click', pageClickEvent);
//     }
//     // unset our event listener once the dropdown is closed
//     return () => {
//       window.removeEventListener('click', pageClickEvent);
//     }
//   }, [isActive]); 

  const dropItems = () => {
    return (
      <div ref={dropdownRef} className={isActive ? `${styles.menu} ${styles.active}` : styles.menu}>
        <ul>
          {navItems.map((item, index) => (
            <li>
              <Link href={`${item.route}`} key={`${index}`} >
                <buttton className={styles.dropbutton}> 
                  {item.name} 
                </buttton>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.menu_container}>
      <button onClick={onClick} className={styles.menu_trigger}>
        <AiOutlineMenu size={40}/>
      </button>
      {dropItems()}
    </div>
  );
};

export default function My_Navbar() {
  // Puts items in nav
  const setNav = () => {
    return (
      <ul className={styles.nav}>
        {navItems.map((item, index) => (
          <li>
            <Link href={`${item.route}`} key={`${index}`}>
              <buttton className={styles.nav_items}> 
                {item.name} 
              </buttton>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    // returns nav with items in correct placement
    <nav className={styles.placement}> 
      {setNav()}
      <DropdownMenu />
    </nav>
  )
};