import { HomePage } from "./pages/Home/HomePage";
import { DetailsPage } from "./pages/Details/DetailsPage.jsx";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { GenresPage } from "./pages/Genres/GenresPage";
import { useState } from "react";
import { TopRated } from "./pages/TopRated/TopRated";
import { VideoGrid } from "./components/Movie/VideoGrid/VideoGrid";
import { Upcoming } from "./pages/Upcoming/Upcoming";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleNavigationGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className={styles.body}>
      <Router>
        <header className={styles.appHeader}>
          <Navigation
            selectedGenre={selectedGenre}
            onGenreSelect={handleNavigationGenreSelect}
          />
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:movieId" element={<DetailsPage />} />
            <Route
              path="/genres/:genreId"
              element={<GenresPage genreId={selectedGenre} />}
            />
            <Route path="/movie/top_rated" element={<TopRated />} />
            <Route path="/movie/:movieId/videos" element={<VideoGrid />} />
            <Route path="/movie/upcoming" element={<Upcoming />} />
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
      </Router>
    </div>
  );
};
