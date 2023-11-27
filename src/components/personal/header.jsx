import styles from '@/styles/components/personal/header.module.scss';
import React, { useState, useRef } from 'react';

const DropdownMenu = () => {
    const dropdownRef = useRef(null);

    const dropDownLinks = [
        {
            text: "Skills",
            slug: "/skills"
        }, 
        {
            text: "Projects",
            slug: "/projects"
        },
        {
            text: "Contact Me", 
            slug: "/contact_me"
        }
    ];

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className={styles.menu_container}>
            <button onClick={onClick} className = {styles.menu_trigger}>
                <span>Menu</span>
            </button>
            <nav ref = {dropdownRef} className = {`${styles.menu} ${isActive ? styles.active : styles.inactive}`}>
                <ul>
                    {dropDownLinks.map((link) => (
                        <li key={link.slug}><a href={link.slug}>{link.text}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    ); 
}



export default function NavBar() {
    return <section className={styles.skills_page}>
        <DropdownMenu />
    </section>
}