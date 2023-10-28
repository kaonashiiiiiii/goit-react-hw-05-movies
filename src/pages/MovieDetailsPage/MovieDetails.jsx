import { Movie, MovieInfo, Spinner } from 'components'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import useMoviedbService from 'services/MoviedbService'

const MovieDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})
  const {loading, error, getMovieDetails } = useMoviedbService()


  async function doRequest() {
    const movieDetails = await getMovieDetails(movieId)
    setMovie(movieDetails)
  }

  useEffect(() => {
    doRequest()
    //eslint-disable-next-line
  }, [movieId])

  function goBack () {
    navigate(location.state || '/')
  }

  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <h2>Error occured</h2> : null
  const movieContent = !loading && !error ? (
    <>
      <Movie movie={movie} />
      <br />
      <hr />
      <MovieInfo movieId={movieId} />
      <hr />
      <Outlet />
    </>
  ) : null
  return (
    <div>
      { loader }
      { errorMsg }
      <button onClick={goBack}>Go back</button>
      { movieContent}
    </div>
  )
}

export default MovieDetails