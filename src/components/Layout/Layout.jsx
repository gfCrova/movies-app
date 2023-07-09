import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { useState } from "react";
import styles from "../../components/Layout/Layout.module.css";


export default function Layout() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleNavigationGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <main className={styles.body}>
      <header className={styles.navHeader}>
        <Navigation
          selectedGenre={selectedGenre}
          onGenreSelect={handleNavigationGenreSelect}
        />
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
