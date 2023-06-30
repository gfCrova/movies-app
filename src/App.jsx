import { HomePage } from "./pages/Home/HomePage";
import { DetailsPage } from "./pages/Details/DetailsPage.jsx";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ImgLogo } from "./components/Navigation/ItemsNav";
import { GenresPage } from "./pages/Genres/GenresPage";
import { useState } from "react";
import { Search } from "./components/Search/Search";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleNavigationGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <Router>
      <body className={styles.body}>
        <header className={styles.appHeader}>
          <Link to={"/"}>
            <ImgLogo />
          </Link>
          <Navigation
            selectedGenre={selectedGenre}
            onGenreSelect={handleNavigationGenreSelect}
          />
          <Search/>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:movieId" element={<DetailsPage />} />
            <Route
              path="/genres/:genreId"
              element={<GenresPage genre={selectedGenre} />}
            />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <ul className={styles.footerUl}>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Github</li>
          </ul>
        </footer>
      </body>
    </Router>
  );
};
