import React, { useState, useEffect } from 'react'
import styles from './cast.module.css'
import { Spinner, CreditItem } from 'components'
import { useParams } from 'react-router-dom'
import useMoviedbService from 'services/MoviedbService'

const Cast = () => {
  const { movieId } = useParams()
  const [credits, setMovieCredits] = useState({})
  const { loading, error, getMovieCredits } = useMoviedbService()
  async function doRequest() {
    const movieCredits = await getMovieCredits(movieId)
    setMovieCredits(movieCredits)
  }

  useEffect(() => {
    doRequest()
    //eslint-disable-next-line
  }, [movieId])

  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <h2>Error occured</h2> : null
  return (
    <div className={styles.castWrapper}>
      {loader}
      {errorMsg}
      {credits.cast?.map((actor) => (
        <CreditItem key={actor.id} actor={actor}/>
      ))}
    </div>
  )
}

export default Cast