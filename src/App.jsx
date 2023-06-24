import { HomePage } from "./pages/HomePage";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <header className={styles.appHeader}>
        <Link className={styles.linkHeader} to="/">
          <h1>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </Router>
  );
};
