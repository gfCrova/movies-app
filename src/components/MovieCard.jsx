import React from "react";
import styles from "../css/MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imgUrl}
        alt={"Image of the movie: " + movie.title}
      />
      {movie.title}
    </li>
  );
};

export default MovieCard;
