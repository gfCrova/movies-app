import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { get } from "../../../Utils/httpClient";
import { Spinner } from "../../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./MovieGrid.module.css";
import { Empty } from "../../Empty/Empty";
import {API_KEY} from '../../../Utils/config'

export const MovieGridBase = ({search, genre, topRated}) => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let searchUrl;

      if (search) {
        searchUrl = `/search/movie?query=${search}&page=${page}`;
      } else if (genre) {
        searchUrl = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&with_genres=${genre}&page=${page}`;
      } else if(topRated) {
        searchUrl = `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
      } else {
        searchUrl = `/discover/movie?page=${page}`;
      }

      const data = await get(searchUrl);

      const uniqueMovies = data.results.filter(
        (movie) => !movies.some((m) => m.id === movie.id)
      );

      setMovies((prevMovies) => prevMovies.concat(uniqueMovies));
      setHasMore(data.page < data.total_pages);
    };

    fetchData();
  }, [search, genre, page]);

  if (movies.length === 0 && !hasMore) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
