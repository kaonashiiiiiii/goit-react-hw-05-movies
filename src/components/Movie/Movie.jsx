import React from 'react'
import styles from './movie.module.css'

const defaultImg = 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
const _baseImageLink = 'https://image.tmdb.org/t/p/w500/'
const Movie = ({ movie }) => {
  const imgSrc = movie.poster_path ? `${_baseImageLink}${movie.poster_path}` : defaultImg 

  return (
    <div className={styles.wrapper}>
      <div className={styles.movieImage}>
        <img src={imgSrc} alt=""/>
      </div>
      <div className={styles.movieInfo}>
        <h2>{movie.title || movie.name}</h2>
        <p>User score: {movie.vote_count}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul className={styles.genres}>
          { movie?.genres?.map((genre) => (
            <li key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Movie