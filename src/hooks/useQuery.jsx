import { useLocation } from "react-router-dom";

export const useQuery = () => { //hook Personalizado
    return new URLSearchParams(useLocation().search);
  }