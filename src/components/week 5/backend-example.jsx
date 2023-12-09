import React, { Component, useState } from "react";
import styles from "@/styles/components/week5/submit.module.scss";
export default function Submit() {
  const [pokemons, setPokemons] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await fetch("/api/fetch", {
        method: "GET",
      });
      // console.log(response);
      if (response.ok) {
        const pokemonData = await response.json();
        // console.log(pokemonData);

        // console.log(pokemonData.data.results);
        setPokemons(pokemonData.data.results);
      } else {
        console.error("Failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.fetchbutton} onClick={handleFetch}>Click Me To Fetch Pokemons</button>
      <div className={styles.pokemons}>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => {
            return (
              <div>
                <a href={pokemon.url}>{pokemon.name}</a>
                <br />
              </div>
            );
          })
        ) : (
          <p>no pokemons for you :/</p>
        )}
      </div>
    </div>
  );
}
