import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { get } from "../Utils/httpClient";
import { Spinner } from "./Spinner";

export const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await get("/discover/movie");
      setMovies(data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if(isLoading) {
    return <Spinner />
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
