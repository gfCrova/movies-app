import { useEffect, useState } from "react";
import { get } from "../../../Utils/httpClient";
import { useParams } from "react-router-dom";
import { VideoModal } from "./VideoModal";

export const VideoGrid = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(); // Datos de la película

  useEffect(() => {
    const fetchData = async () => {
      const data = await get(`/movie/${movieId}/videos`);
      setMovie(data);
      console.log(data);
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="d-flex gap-2">
        <VideoModal movie={movie} type={"Trailer"} />
        <VideoModal movie={movie} type={"Clip"} />
        <VideoModal movie={movie} type={"Behind the Scenes"} />
    </div>
  );
};
