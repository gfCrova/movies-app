import { Search } from "../components/Search";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.listNav}>
        <button class={styles.btn}>Estrenos</button>
        <div class={styles.dropdown}>
          <button class={styles.dropbtn}>Géneros</button>
          <div class={styles.dropdownContent}>
            <a href="/">Action</a>
            <a href="/">Adventure</a>
            <a href="/">Animation</a>
            <a href="/">Comedy</a>
            <a href="/">Crime</a>
            <a href="/">Drama</a>
            <a href="/">Fantasy</a>
            <a href="/">Romance</a>
            <a href="/">Science Fiction</a>
            <a href="/">Terror</a>
            <a href="/">Thriller</a>
          </div>
        </div>
        <button class={styles.btn}>Series</button>
        <Search />
      </ul>
    </nav>
  );
};
