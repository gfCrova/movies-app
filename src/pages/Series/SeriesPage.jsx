import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import styles from './SeriesPage.module.css'

export const SeriesPage = () => {

  return (
    <div className={`${styles.container} text-light text-center py-5`}>
        <h1 className={`${styles.title} pt-5 mb-0`}>TV Series</h1>
        <p>Series</p>
        <MovieGridBase tvseries={true}/>
    </div>
  );
}
