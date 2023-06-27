import React from "react";
import { GenresGrid } from "../components/GenresGrid";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export const GenresPage = () => {
  const query = useQuery();
  const genre = query.get("genre");
  const debounceSearch = useDebounce(genre, 500);
  return (
    <div>
      <GenresGrid key={debounceSearch} genre={debounceSearch}/>
    </div>
  );
};