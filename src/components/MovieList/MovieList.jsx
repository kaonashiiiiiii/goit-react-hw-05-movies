import React from 'react'
import styles from './movieList.module.css'
import { Link, useLocation } from 'react-router-dom'

const MovieList = ({ movies }) => {
  const location = useLocation()
  return (
    <ul className={styles['movie-list']}>
      { movies.map((movie) => (
        <li key={movie.id}>
          <Link state={location.pathname} to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      )) }
    </ul>
  )
}

export default MovieList