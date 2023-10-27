import React, { useState, useEffect } from 'react'
import styles from './reviews.module.css'
import { useParams } from 'react-router-dom'
import { ReviewList, Spinner } from 'components'
import useMoviedbService from 'services/MoviedbService'

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])
  const { loading, error, getMovieReviews } = useMoviedbService()

  async function doRequest() {
    const movieReviews = await getMovieReviews(movieId)
    setReviews(movieReviews)
  }

  useEffect(() => {
    doRequest()
    //eslint-disable-next-line
  }, [movieId])

  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <h2>Error occured</h2> : null
  return (
    <div className={styles.reviewsWrapper}>
      { loader }
      { errorMsg }
      { reviews.length > 0 ?<ReviewList reviews={reviews}/> : <h2>We don't have any reviews yet</h2> }
    </div>
  )
}

export default Reviews