import { HomePage } from "../pages/Home/HomePage";
import { MovieDetails } from "../pages/Details/MovieDetails.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GenresPage } from "../pages/Genres/GenresPage";
import { TopRated } from "../pages/TopRated/TopRated";
import { VideoGrid } from "../components/Movie/VideoGrid/VideoGrid";
import { Upcoming } from "../pages/Upcoming/Upcoming";
import Layout from "../components/Layout/Layout";
import { SeriesPage } from "../pages/Series/SeriesPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/upcoming" element={<Upcoming />} />
          <Route path="movie/top_rated" element={<TopRated />} />
          <Route path="genres/:genreId" element={<GenresPage />} />
          <Route path="series" element={<SeriesPage/>}></Route>
          <Route path="movie/:movieId" element={<MovieDetails />} />
          <Route path="movie/:movieId/videos" element={<VideoGrid />} />
          <Route path="*" element={<Navigate replace to="/" />} />{" "}
          {/* Cualquier Ruta inexistente, Redirecciona a Home */}
        </Route>
      </Routes>
    </Router>
  );
};
