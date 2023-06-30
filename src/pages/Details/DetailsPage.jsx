import React, { useEffect, useState } from "react";
import styles from "./DetailsPage.module.css";
import { useParams } from "react-router-dom";
import { get } from "../../Utils/httpClient";
import { Spinner } from "../../components/Spinner/Spinner";
import { moviePoster } from "../../Utils/moviePoster";

/**
Componente DetailsPage

Renderiza la página de detalles de una película.
Muestra la imagen, título, géneros y descripción de la película.
*/

export const DetailsPage = () => {
  const { movieId } = useParams(); // ID de la película obtenido de los parámetros de la URL
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(); // Datos de la película

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      // Obtener los datos de la API para la película específica
      const data = await get("/movie/" + movieId);
      setMovie(data);
      setIsLoading(false);
    };
    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imgUrl = moviePoster(movie.poster_path, 400);

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={styles.col}>
        <p className={styles.title}>
          <strong className={styles.strongP}>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong className={styles.strongP}>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong className={styles.strongP}>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong className={styles.strongP}>Release Date: </strong>
          {movie.release_date}
        </p>
        <p>
          <strong className={styles.strongP}>Popularity: </strong>
          {movie.popularity}
        </p>
      </div>
    </div>
  );
};
