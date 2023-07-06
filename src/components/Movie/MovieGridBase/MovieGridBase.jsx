import { useEffect, useState, useRef } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { get } from "../../../Utils/httpClient";
import { Spinner } from "../../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./MovieGrid.module.css";
import { Empty } from "../../Empty/Empty";
import {API_KEY} from '../../../Utils/config'

export const MovieGridBase = ({search, genre, topRated, videos, upcoming, nowPlaying}) => {
  const moviesRef = useRef([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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
      } else if(videos) {
        searchUrl = `/movie/${genre}/videos?api_key=${API_KEY}&language=en-US`
      } else if(upcoming) {
        searchUrl = `/movie/upcoming?api_key=${API_KEY}&page=${page}`
      } else if(nowPlaying) {
        searchUrl = `/movie/now_playing?language=en-US&page=${page}`
      } else {
        searchUrl = `/discover/movie?page=${page}`;
      }

      const data = await get(searchUrl);

      const uniqueMovies = data.results.filter(
        (movie) => !moviesRef.current.some((m) => m.id === movie.id)
      );

      moviesRef.current = [...moviesRef.current, ...uniqueMovies];
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    };
    
    fetchData();

  }, [search, genre, page, moviesRef, topRated, upcoming, videos, nowPlaying]);

  if (moviesRef.current.length === 0 && !hasMore && !isLoading) {
    return <Empty />;
  }

  if(!isLoading) {
    setIsLoading(true);
  }

  return (
    <InfiniteScroll
      dataLength={moviesRef.current.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {moviesRef.current.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
