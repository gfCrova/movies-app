import Carousel from "react-bootstrap/Carousel";
import { Badge } from "react-bootstrap";
import styles from "./Carousel.module.css";
import { useEffect, useState } from "react";
import { get } from "../../Utils/httpClient";
import { API_KEY } from "../../Utils/config";
import { NavigationSearch } from "../../components/Navigation/NavigationSearch";

export const CarouselHome = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await get(`/trending/movie/week?api_key=${API_KEY}`);
        setMovies(response.results.slice(0, 4));
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching movies: ", error);
      }
    };
    fetchMovies();
  });
  
  if (isLoading) {
    return "";
  }

  return (
    <div>
      <Carousel className={styles.carousel}>
      {movies.map((movie) => {
        return (
          <Carousel.Item key={movie.id} className={styles.itemCarousel}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className={`${styles.imgPath} opacity-50`}
            />
            <Carousel.Caption className={`${styles.caption} w-75 mb-5 pb-5`}>
              <h1
                className={`${styles.captionTitle} d-flex align-items-center text-start text-light fw-bold`}
              >
                {movie.title}
                <div className="fs-3">
                  <Badge text="dark" bg="warning" className="text-uppercase rounded-5 ms-3 px-2 py-1">
                    {movie.media_type}
                  </Badge>
                  <Badge text="dark" bg="warning" className="rounded-5 ms-3 px-2 py-1">
                    {new Date(movie.release_date).getFullYear()}
                  </Badge>
                </div>
              </h1>
              <p className={`text-start`}>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
    <NavigationSearch />
    </div>
  );
};
