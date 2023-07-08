import logo from "../../assets/img/logoTitle.png";
import styles from './Navigation.module.css'

export const ImgLogo = () => {
  return <img className={styles.imgLogo} src={logo} alt="logo-tmdb"/>;
};
