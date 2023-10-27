import { Movie, MovieInfo, Spinner } from 'components'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import useMoviedbService from 'services/MoviedbService'

const MovieDetails = () => {
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
    navigate(-1)
  }

  const loader = loading ? <Spinner /> : null
  const errorMsg = error ? <p>Some error occures</p> : null
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