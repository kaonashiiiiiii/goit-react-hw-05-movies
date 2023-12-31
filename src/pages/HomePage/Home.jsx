import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import useMoviedbService from 'services/MoviedbService'
import { MovieList, Spinner } from 'components'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const { loading, error, getTrendingMovies } = useMoviedbService()
  
  async function doRequest () {
    const movies = await getTrendingMovies()
    setTrendingMovies(movies)
  } 
  
  useEffect(() => {
    doRequest()
    //eslint-disable-next-line
  }, [])

  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <h2>Error occured</h2> : null
  return (
    <div className={styles['home-wrapper']}>
      <h1>Trending today</h1>
      {loader}
      {errorMsg}
      <MovieList movies={trendingMovies}/>
    </div>
  )
}

export default Home