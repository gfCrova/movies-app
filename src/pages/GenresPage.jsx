import React from "react";
import { GenresGrid } from "../components/GenresGrid";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";
import { useParams } from "react-router-dom";

export const GenresPage = () => {
  const { genreId } = useParams();
  const query = useQuery();
  const genre = query.get("genre");
  const debounceSearch = useDebounce(genre, 500);

  return (
    <div>
      <h1>Search Genres: {genreId}</h1>
      <GenresGrid key={debounceSearch} genre={genreId}/>
    </div>
  );
};