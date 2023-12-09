import React, { Component } from "react";
import Image from "next/image"; // glad to see you using Image!

import styles from "@/styles/components/personal/dropdown.module.scss";

const myFavThings = ["scooby", "chcolates", "cookies"];

export default function dropdown() {
    const list = (array) => {
        return (array.map((elem) => <li>{elem}</li>));
    }

    return (
        <section className = {styles.container}>
            <h1 className={styles.header}>my favorite things are: </h1>
            <ul>{list(myFavThings)}</ul>
            
        </section>
        

    );
}