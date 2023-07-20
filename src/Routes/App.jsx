import { HomePage } from "../pages/Home/HomePage";
import { DetailsPage } from "../pages/Details/DetailsPage.jsx";
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
import { SerieGrid } from "../components/Serie/SerieGrid";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:movieId" element={<DetailsPage />} />
          <Route path="genres/:genreId" element={<GenresPage />} />
          <Route path="movie/top_rated" element={<TopRated />} />
          <Route path="movie/:movieId/videos" element={<VideoGrid />} />
          <Route path="movie/upcoming" element={<Upcoming />} />
          <Route path="serie" element={<SerieGrid/>}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />{" "}
          {/* Cualquier Ruta inexistente, Redirecciona a Home */}
        </Route>
      </Routes>
    </Router>
  );
};
