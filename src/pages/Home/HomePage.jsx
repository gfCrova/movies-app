import React from "react";
import { MovieGridBase } from "../../components/Movie/MovieGridBase/MovieGridBase";
import { useQuery } from "../../hooks/useQuery";
import { useDebounce } from "../../hooks/useDebounce";
import { CarouselHome } from "../../components/Carousel/Carousel";
import { Search } from "../../components/Search/Search";
import styles from './HomePage.module.css'
import logoImg from '../../assets/img/logo-tmdb.svg'
import logoTitle from '../../assets/img/logoTitle.png'

export const HomePage = () => {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 500);
  return (
    <div>
      <h1 className={styles.titleHome}>
        goFlix
        <img src={logoTitle} alt="logoTitle" />
      </h1>
      <CarouselHome />
      <div className="d-flex justify-content-around gap-3 py-4">
        <img className={styles.img} src={logoImg} alt="logo" width={300} />
        <Search />
        <img className={styles.img} src={logoImg} alt="logo" width={300} />
      </div>
      <MovieGridBase key={debounceSearch} search={debounceSearch} />
    </div>
  );
};
