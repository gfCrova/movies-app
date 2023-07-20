import { SerieGrid } from "../../components/Serie/SerieGrid";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";

export const SeriesPage = () => {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);

  return (
    <div>
      <h1>Series </h1>
      <SerieGrid key={debounceSearch} search={debounceSearch} />
    </div>
  );
}
