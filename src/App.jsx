import { HomePage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage.jsx";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ImgLogo } from "./components/ItemsNav";
import { GenresPage } from "./pages/GenresPage";
import { useState } from "react";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleNavigationGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <Router>
      <header className={styles.appHeader}>
        <Link to={"/"}>
          <ImgLogo />
        </Link>
        <Navigation onGenreSelect={selectedGenre} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<DetailsPage />} />
          <Route path="/genres/:genreId" element={<GenresPage genre={handleNavigationGenreSelect}/>} />
        </Routes>
      </main>
    </Router>
  );
};
