import styles from "./Search.module.css";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

/**
 Componente Search

 Renderiza un formulario de búsqueda que permite al usuario ingresar un término de búsqueda.
 Cuando se realiza una búsqueda, redirige a la página principal con el parámetro de búsqueda en la URL.
*/

export const Search = () => {
  const navigate = useNavigate(); // Hook de enrutamiento para redirigir a la página principal
  const query = useQuery(); // Hook para obtener los parámetros de la URL
  const search = query.get("search"); // Término de búsqueda obtenido de los parámetros de la URL

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search ?? ""}
          autoFocus
          placeholder="Search movie..."
          aria-label="Search Movie"
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value); // Redirigir a la página principal con el nuevo término de búsqueda en la URL
          }}
        />
        <ImSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
};
