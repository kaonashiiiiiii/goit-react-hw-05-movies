import React from 'react'
import styles from './movie.module.css'

const _baseImageLink = 'https://image.tmdb.org/t/p/w500/'
const Movie = ({ movie }) => {
  console.log(movie)
  return (
    <div className={styles.wrapper}>
      <div className={styles.movieImage}>
        <img src={`${_baseImageLink}${movie.poster_path}`} alt=""/>
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