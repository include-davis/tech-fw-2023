import React, { Component } from "react";
import { useState } from "react";
import styles from "@/styles/components/week3/state.module.scss";

export default function Form() {
  //TODO: REMOVE THESE DECLARATIONS
  const name = "Hello"; // TODO: create a state variable called 'name' with a proper setter and set its inital value to your name
  const age = 0; //TODO: do the same but with an age variable instead

  return (
    <div className={styles.container}>
      {/* TODO: instead of console.log, change it to your setter function */}
      <input value={name} onChange={(e) => console.log(e.target.value)} />
      {/* add in an onChange attribute and use setAge to increment the current age by 1 */}
      <button className={styles.btn}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </div>
  );
}
