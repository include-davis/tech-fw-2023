import {React, useState} from 'react'
import styles from "@/styles/components/personal/props.module.scss";


export default function Props(person){
    const {name, club} = person
    //const name = person.name;
    return(
        <div className={styles.card}>
            Hi {name}! Welcome to {person?.club}!
        </div>
    );

}