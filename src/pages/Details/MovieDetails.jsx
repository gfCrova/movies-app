import React, { useEffect, useState } from "react";
import styles from "./DetailsPage.module.css";
import { useParams } from "react-router-dom";
import { get } from "../../Utils/httpClient";
import { Spinner } from "../../components/Spinner/Spinner";
import { moviePoster, backdropPath } from "../../Utils/moviePoster";
import { Badge } from "react-bootstrap";
import { VideoGrid } from "../../components/Movie/VideoGrid/VideoGrid";

/**
Componente DetailsPage

Renderiza la página de detalles de una película.
Muestra la imagen, título, géneros y descripción de la película.
*/

export const MovieDetails = () => {
  const { movieId } = useParams(); // ID de la película obtenido de los parámetros de la URL
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(); // Datos de la película

  useEffect(() => {
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
  const bgImgUrl = backdropPath(movie.backdrop_path, 500);

  return (
      <main className={`${styles.bodyDetails}`}>
        <div className={styles.detailsContainer}>
          <img
            className={`${styles.col} ${styles.movieImage}`}
            src={imgUrl}
            alt={movie.title}
          />
          <div className={styles.col}>
            <h1 className="mt-0">{movie.title}</h1>
            <p>
              {movie.genres.map((genre) => {
                return (
                  <Badge className="m-1 text-uppercase" text="dark" bg="info">
                    {genre.name}
                  </Badge>
                );
              })}
            </p>
            <p>
              <strong className={`${styles.strongP} text-uppercase text-secondary`}>
                Synopsis:{" "}
              </strong>
              {movie.overview}
            </p>
            <p >
              <strong className={`${styles.strongP} text-uppercase text-secondary`}>Release Date: </strong>
              {movie.release_date}
            </p>
            <p >
              <strong className={`${styles.strongP} text-uppercase text-secondary`}>Popularity: </strong>
              {movie.popularity}
            </p>
            <img
              width={400}
              className={styles.bgImg}
              src={bgImgUrl}
              alt={movie.original_title}
            />
            <VideoGrid key={movieId} mov={movieId}/>
          </div>
        </div>
      </main>
  );
};
