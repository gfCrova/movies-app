import React from "react";
import { MovieGrid } from "../components/MovieGrid";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";
import { CarouselHome } from '../components/Carousel'

export const HomePage = () => {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);
  return (
    <div>
      <br />
      <CarouselHome/>
      <br />
      <MovieGrid key={debounceSearch} search={debounceSearch}/>
    </div>
  );
};
