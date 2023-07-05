import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { moviePoster } from "../../../Utils/moviePoster";

/**
  Componente MovieCard
 
  Renderiza una tarjeta de película con su imagen y título.
  La tarjeta se muestra dentro de un enlace que redirige a la página de detalles de la película.
 
  Props:
  - movie: Objeto que contiene los datos de la película.
 
  Ejemplo de uso:
 
  <MovieCard movie={movieData} />
*/

export const MovieCard = ({ movie }) => {
  const imgUrl = moviePoster(movie.poster_path, 300);
  return (
    <div className={styles.movieCard}>
      <Link className={styles.movieLink} to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imgUrl}
          alt={"Image of the movie: " + movie.title}
        />
        <p className={styles.movieTitle}>{movie.title}</p>
      </Link>
    </div>
  );
};
