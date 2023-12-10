import React, { Component } from "react";
import Image from "next/image"; 
import {useState} from 'react';

import styles from "@/styles/components/personal/dropdown.module.scss";

const myFavThings = ["scooby", "chcolates", "cookies"];
const myotherthings = ["smth1", "smth2"]



export default function dropdown() {
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