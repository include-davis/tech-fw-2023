import React, { useState, useRef } from 'react';
import styles from '@/styles/components/personal/dropdown.module.scss'

export default function Dropdown() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    
    const onClick = () => setIsActive(!isActive);

    return (
        <div className={styles.menuContainer}>
            <button onClick={onClick} className={styles.menuTrigger}>
                User
                {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
            </button>
            <nav ref={dropdownRef} className={`${styles.menu} ${isActive ? styles.active : styles.inactive}`}>
                <ul>
                    <li><a href="/messages">Messages</a></li>
                    <li><a href="/trips">Trips</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </nav>
        </div>
    );
}
