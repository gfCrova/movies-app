import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import styles from "../Genres/GenresPage.module.css";
import logoUpcoming from "../../assets/img/upcoming.png";

export const Upcoming = () => {
  return (
    <div className="text-light text-center py-5">
      <h1 className={`${styles.title} pt-5 mb-0`}> Upcoming <img src={logoUpcoming} alt="logo" width={50} height={50}/></h1>
      <p>Movies</p>
      <MovieGridBase upcoming={true} />
    </div>
  );
};
