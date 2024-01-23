import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/personal/nav.module.scss";

// I used the following link to understand the basic navigation bar 
// https://www.codevertiser.com/reactjs-responsive-navbar/.  
// I also used the code from navbar.jsx and navbar.module.scss to guide me. 


// The titles/links in the navigation bars are random as I didn't know what to write
// and just wanted to get practice. 


const navbar = [
    { link: "BLOG", href: "personal"}, 
    { link: "PROJECTS", href: "personal"}, 
    { link: "SERVICES", href: "personal"}, 
    { link: "CONTACT ME", href: "personal"}
];

const dropDownItems = ["Web design", "Web development", "Branding consultancy"];

const Navbar = () => {
    const [active, setActive] = useState(false);

    const dropDown = () => {
        return ( 
            <ul className = {styles.dropDown}> 
                {dropDownItems.map((service, index) => ( 
                <Link href = {`${service} /development/`} key = {`${index} Development`}> 
                <li> {service} services </li>
                </Link>
            ))} 
            </ul>
        ); 
    }; 

    return(
        <navbar className = {styles.navbar}>
            <Link href = "https://includedavis.com/about" target = "_blank">
                <Image className= {styles.logo} src = "/Vector.svg" width = {50} height = {50} sizes = {"{max-width: 1048px} 30px, 40px"} alt = "logo"/>
            </Link>

            <ul className = {styles.navlinks}> 
                {navbar.map((item, index) => {
                    return (
                        <li key = {`dropdown ${index}`}>
                            {item.link === "SERVICES"  && dropDown()}
                            <Link className = {styles.link}
                                href = {`/${item.href.toLowerCase()}`}>
                                {item.link}
                            </Link> 
                        </li>
                    ); 
                    })} 
            </ul>
        </navbar>
    ); 
}

export default function nav() { 
    return (
        <Navbar> </Navbar>
    )  
}
