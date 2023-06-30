import { GenresGrid } from "../../components/Movie/GenresGrid/GenresGrid";
import { useParams } from "react-router-dom";
import styles from './GenresPage.module.css'

export const GenresPage = () => {

  const { genreId } = useParams();

  return (
    <div>
      <h1 className={styles.title}>Results: {genreId}</h1>
      <GenresGrid key={genreId} genre={genreId}/>
    </div>
  );
};