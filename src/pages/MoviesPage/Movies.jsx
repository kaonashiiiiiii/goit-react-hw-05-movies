import React, { useEffect, useState } from 'react'
import styles from './movies.module.css'
import { MovieList, Searchbar, Spinner } from 'components'
import { useSearchParams } from 'react-router-dom'
import useMoviedbService from 'services/MoviedbService'

const Movies = () => {
  const [seachedMovies, setSearchedMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const {loading, error, getSearchedMovies } = useMoviedbService()
  const queryParam = searchParams.get('query')

  useEffect(() => {
    if (queryParam) {
      doSearch()
    }
    //eslint-disable-next-line
  }, [queryParam])

  function setQueryParam (query) {
    setSearchParams({ query })
  }

  async function doSearch () {
    const searchData = await getSearchedMovies(queryParam)
    setSearchedMovies(searchData)
  }

  console.log(seachedMovies)
  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <p>Error occured</p> : null
  return (
    <div className={styles.moviesWrapper}>
      <Searchbar setQueryParam={setQueryParam}/>
      {loader}
      {errorMsg}
      <MovieList movies={seachedMovies}/>
    </div>
  )
}

export default Movies