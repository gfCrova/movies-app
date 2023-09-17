import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";
import { CarouselHome } from "../../components/Carousel/Carousel";
import styles from './HomePage.module.css'
import image from '../../assets/img/logoTitle.png'

export const HomePage = () => {

  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);

  return (
    <div className={styles.divBg}>
      <h1 className={styles.title}>GoFlix <img className={styles.imgLogo} src={image} alt="logo"/></h1>
      <CarouselHome />
      <MovieGridBase key={debounceSearch} search={debounceSearch} />
    </div>
  );
};
