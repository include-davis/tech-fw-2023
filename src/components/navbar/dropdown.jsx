import React, { Component } from "react";
import Image from "next/image"; 
import {useState} from 'react';

// Jay: uncomment the following import statement once you've moved your dropdown.module.scss into the personal folder. 
// It won't work right now since the file is in navbar folder instead.
// import styles from "@/styles/components/personal/dropdown.module.scss";

// delete this import statement once you move the file.
import styles from "@/styles/components/navbar/dropdown.module.scss";

const myFavThings = ["scooby", "chcolates", "cookies"];
const myotherthings = ["smth1", "smth2"]

// Jay: also, it is convention to capitalize the first letter of a component.
// React gets super confused otherwise.

export default function Dropdown() {
    const list = (array) => {
        return (array.map((elem) => <li>{elem}</li>));
    }

    return (
        <section className = {styles.container}>
            <h1 className={styles.header}>my favorite things are: </h1>
            <ul>{list(myFavThings)}</ul>
            <ul>{list(myotherthings)}</ul>
        </section>
        

    );
}