import React from "react";
import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";
import { CarouselHome } from "../../components/Carousel/Carousel";
import { Search } from "../../components/Navigation/Search/Search";

export const HomePage = () => {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);
  return (
    <div>
      <CarouselHome />
      <div className="p-4">
        <Search />
      </div>
      <MovieGridBase key={debounceSearch} search={debounceSearch} />
    </div>
  );
};
