import React, { Component } from "react";
import styles from "@/styles/components/week3/map.module.scss";
//create an array with 3-4 of your favorite things here
const favoriteThings = ["Food", "Music", "Sleep"];

const myFavThings = ["running", "rice", "dogs", "chocolate", "music"]

export default function Map() {
  //create an arrow function mapping your favorite things to list items here
  function createFavoriteItem(item) {
    return <li className={styles.favoriteItem}>{item}</li>;
  }

  const list = (array) => {
    return (array.map((elem) => <li>{elem}</li>))
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.header}>My Favorite Things Are: </h1>
      <ul>{list(myFavThings)}</ul>
      {/* create an unordered list that calls on our list function */}
      <ul className={styles.favorites}>
        {favoriteThings.map((item) => {
          return createFavoriteItem(item);
        })}
        {/* Alternately, return an html element*/}
        {/* {favoriteThings.map((item) => {
          return <li className={styles.favoriteItem}>{item}</li>;
        })} */}
      </ul>
    </section>
  );
}