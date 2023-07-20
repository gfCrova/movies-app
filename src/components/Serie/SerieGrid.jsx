import { useState, useEffect, useRef } from "react";
import { get } from "../../Utils/httpClient";
import { Spinner } from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import {MovieCard} from '../Movie/MovieCard/MovieCard'
import styles from '../Movie/MovieGridBase/MovieGrid.module.css'

export const SerieGrid = () => {
  const seriesRef = useRef([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let searchUrl;

      searchUrl = `/discover/tv?page=${page}`;

      const data = await get(searchUrl);

      const uniqueSeries = data.results.filter(
        (serie) => !seriesRef.current.some((m) => m.id === serie.id)
      );

      seriesRef.current = [...seriesRef.current, ...uniqueSeries];
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  if (!isLoading) {
    setIsLoading(true);
  }

  return (
    <InfiniteScroll
      dataLength={seriesRef.current.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {seriesRef.current.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
