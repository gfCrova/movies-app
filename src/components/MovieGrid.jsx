import React from "react";
import movies from "./movies.json";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";

export const MovieGrid = () => {
  console.log(movies);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
