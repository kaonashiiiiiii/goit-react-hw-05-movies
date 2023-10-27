import React from 'react'
import styles from './movieList.module.css'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <ul className={styles['movie-list']}>
      { movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      )) }
    </ul>
  )
}

export default MovieList