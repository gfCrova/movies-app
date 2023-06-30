import { MovieCard } from "../../Movie/MovieCard/MovieCard";
import { get } from "../../../Utils/httpClient";
import { Spinner } from "../../Spinner/Spinner";
import {useEffect, useState} from 'react'
import {Empty} from '../../Empty/Empty'
import InfiniteScroll from "react-infinite-scroll-component";
import styles from '../MovieGrid/MovieGrid.module.css'
import {API_KEY} from '../../../Utils/config'

export const GenresGrid = ({genre}) => {
 
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Indicador de si hay más películas por cargar
  const [page, setPage] = useState(1);  // Número de página actual


  useEffect(() => {

    const fetchData = async () => {
      // Construir la URL de la consulta en función de la búsqueda y la página actual
      let searchUrl = genre ? `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&with_genres=${genre}&page=${page}` : `/discover/movie?page=${page}`;

      const data = await get(searchUrl);

      // Filtrar películas duplicadas
      const uniqueMovies = data.results.filter(
        (movie) => !movies.some((m) => m.id === movie.id)
      );
      // Actualizar la lista de películas y el indicador de carga
      //setMovies((prevMovies) => prevMovies.concat(uniqueMovies));
      setMovies((prevMovies) => [...prevMovies, ...uniqueMovies]);
      setHasMore(data.page < data.total_pages);
    };
    fetchData();
  }, [genre, page, movies]);

  if(movies.length === 0 && !hasMore) {
    return <Empty/>
  }

  return (
    <InfiniteScroll
      dataLength={movies.length} 
      hasMore={hasMore}  // Indicador de si hay más películas por cargar
      next={() => setPage((prevPage) => prevPage + 1)} // Función para cargar más películas
      loader={<Spinner />} // Componente de carga mientras se obtienen más películas
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} /> // Renderizar cada película en un componente MovieCard
        ))}
      </ul>
    </InfiniteScroll>
  );
};
