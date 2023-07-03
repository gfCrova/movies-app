import React from "react";
import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";
import { CarouselHome } from '../../components/Carousel/Carousel'

export const HomePage = () => {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);
  return (
    <div>
      <CarouselHome/>
      <MovieGridBase key={debounceSearch} search={debounceSearch}/>
    </div>
  );
};
