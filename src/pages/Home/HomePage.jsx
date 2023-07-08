import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";
import { CarouselHome } from "../../components/Carousel/Carousel";
import styles from './HomePage.module.css'
import image from '../../assets/img/logoTitle.png'
import { useState } from "react";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);

  return (
    <div className={styles.divBg} onChange={() => {setIsLoading(false)}}>
      <h1 className={styles.title}>GoFlix <img className={styles.imgLogo} src={image} alt="logo"/></h1>
      <CarouselHome />
      <MovieGridBase key={debounceSearch} search={debounceSearch} />
    </div>
  );
};
