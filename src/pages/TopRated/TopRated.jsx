import React from 'react'
import { MovieGridBase } from '../../components/Movie/MovieGridBase/MovieGridBase'
import styles from '../Genres/GenresPage.module.css'
import { FaRankingStar } from 'react-icons/fa6';

export const TopRated = () => {
  return (
    <div>
        <h1 className={styles.title}>Top Rated <FaRankingStar color='yellow'/></h1>
        <MovieGridBase topRated={true}/>
    </div>
  )
}
