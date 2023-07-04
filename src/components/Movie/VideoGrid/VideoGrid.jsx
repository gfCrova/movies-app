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
    };
    fetchData();
  }, [movieId]);

  const types = ["Trailer", "Clip", "Behind the Scenes", "Featurette", "Teaser"]

  return (
    <div className="d-flex flex-wrap gap-2">
        {
          types.map(tip => {
            return <VideoModal movie={movie} type={tip} />
          })
        }
    </div>
  );
};
