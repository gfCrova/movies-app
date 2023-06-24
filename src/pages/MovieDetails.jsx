import React from 'react'
import movie from './details.json'
import styles from './MovieDetails.module.css'

export const MovieDetails = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img src={imgUrl} alt={movie.title} />
      <div>
        <p><strong>Title: </strong>{movie.title}</p>
        <p>{movie.genres.map(genre => genre.name)}</p>
        <p><strong>Description: </strong>{movie.overview}</p>
      </div>
    </div>
  )
}