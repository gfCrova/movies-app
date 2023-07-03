import { MovieGridBase } from '../../components/Movie/MovieGridBase/MovieGridBase'
import { useParams } from "react-router-dom";
import styles from './GenresPage.module.css'

export const GenresPage = () => {

  const { genreId } = useParams();

  return (
    <div>
      <h1 className={styles.title}>Results: {genreId}</h1>
      <MovieGridBase key={genreId} genre={genreId}/>
    </div>
  );
};