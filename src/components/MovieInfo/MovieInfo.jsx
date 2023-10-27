import React from 'react'
import { Link } from 'react-router-dom'
import styles from './movieInfo.module.css'

const MovieInfo = ({ movieId }) => {
  return (
    <div className={styles.infoWrapper}>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  )
}

export default MovieInfo