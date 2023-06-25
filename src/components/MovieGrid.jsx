import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { get } from "../Utils/httpClient";

export const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get("/discover/movie");
      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
