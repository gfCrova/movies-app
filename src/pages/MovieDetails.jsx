import React, { useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { get } from "../Utils/httpClient";
import { Spinner } from "../components/Spinner";

export const MovieDetails = () => {

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await get("/movie/" + movieId);
      setMovie(data);
      setIsLoading(false);
    };
    fetchData();
  }, [movieId])

  if(isLoading) {
    return <Spinner/>
  }

  const imgUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={styles.col}>
        <p className={styles.title}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
