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

  console.log(reviews)
  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <p>Error occured</p> : null
  return (
    <div className={styles.reviewsWrapper}>
      { loader }
      { errorMsg }
      <ReviewList reviews={reviews}/>
    </div>
  )
}

export default Reviews