import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link className={styles.movieLink} exact to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imgUrl}
          alt={"Image of the movie: " + movie.title}
        />
        <p className={styles.movieTitle}>{movie.title}</p>
      </Link>
    </li>
  );
};
