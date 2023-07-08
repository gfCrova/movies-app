import { Search } from "../../components/Search/Search";
import styles from "../../pages/Home/HomePage.module.css";
import logoImg from "../../assets/img/logo-tmdb.svg";

export const NavigationSearch = () => {

  return (
      <div className="d-flex justify-content-around gap-3 py-4">
        <img className={styles.img} src={logoImg} alt="logo" width={300} />
        <Search />
      </div>
  );
};
