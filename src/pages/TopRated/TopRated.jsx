import React from 'react'
import { MovieGridBase } from '../../components/Movie/MovieGridBase/MovieGridBase'
import styles from '../Genres/GenresPage.module.css'
import logoTop from '../../assets/img/topRated.png'

export const TopRated = () => {
  return (
    <div className='text-light text-center py-5'>
        <h1 className={`${styles.title} pt-5 mb-0`}>Top Rated <img src={logoTop} alt='logo' width={50}/></h1>
        <p>Movies</p>
        <MovieGridBase topRated={true}/>
    </div>
  )
}
