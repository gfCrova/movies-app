import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import { useParams } from "react-router-dom";
import styles from "./GenresPage.module.css";
import { useState, useEffect } from "react";
import genres from '../../Utils/genres.json'

export const GenresPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const { genreId } = useParams();
  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const foundGenre = genres.genres.find((genre) => genre.id.toString() === genreId);

      if (foundGenre) {
        setGenreName(foundGenre.name);
      } else {
        return "...";
      }
      setIsLoading(false);
    };

    fetchData();
  }, [genreId, isLoading]);

  return (
    <div>
      <h1 className={`${styles.title} mb-0`}>{genreName}</h1>
      <p className="text-center text-light">Movies</p>
      <MovieGridBase key={genreId} genre={genreId} />
    </div>
  );
};
