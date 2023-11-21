import React, { Component } from "react";
import { useState } from "react";
import styles from "@/styles/components/week3/state.module.scss";

export default function Form() {

  // TODO: create a state variable called 'name' with a proper setter and set its inital value to your name
  const [name, setName] = useState("Emily");

   //TODO: do the same but with an age variable instead
  const [age, setAge] = useState(21);

  const subAge = () => {
    setAge((age - 1))
  }
  
  return (
    <div className={styles.container}>
      {/* TODO: instead of console.log, change it to your setter function */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* add in an onChange attribute and use setAge to increment the current age by 1 */}
      <button className={styles.btn} onClick={() => setAge((prevAge) => prevAge + 1)}>
        Increment age
      </button>
      <button className={styles.btn} onClick={subAge}>
        Decrement age
      </button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </div>
  );
}
