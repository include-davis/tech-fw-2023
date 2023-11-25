import React, { Component } from "react";
import styles from "@/styles/components/week3/map.module.scss";
//create an array with 3-4 of your favorite things here
const myFavThings = ["soccer", "plants", "friends"];
export default function Map() {
  //create an arrow function mapping your favorite things to list items here
  const list = (array) => {
    return array.map((elem) => <li>{elem}</li>);
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>My Favorite Things Are: </h1>
      {/* create an unordered list that calls on our list function */}
      <ul>{list(myFavThings)}</ul>
    </section>
  );
}

// see result in #include website, week 4 workshop (use npm run dev)
