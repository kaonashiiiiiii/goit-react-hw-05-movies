import { useHttp } from "hooks/http.hook";

// username = Priora1034
// password = rsm2
const useMoviedbService = () => {
  const { loading, request, error, clearError } = useHttp()
  const _apiBase = 'https://api.themoviedb.org/3'
  const _apiAccessKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzQ5NDE5NGZmYmY4MzE5NjRjZDNjN2Q4YjJhMjNhYSIsInN1YiI6IjY1MzU0YjZlMmIyMTA4MDBlMjNjYzcyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DudEKgw6RZQrC7TLVUMDjozgWf2AB6wg_GVqFseoepM'
  const _requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${_apiAccessKey}`
    }
  }

  async function getTrendingMovies () {
    const url = `${_apiBase}/trending/all/day?language=en-US`
    const data = await request(url, _requestOptions.method, null, _requestOptions.headers)
    return data.results
  }

  async function getSearchedMovies (query) {
    const url = `${_apiBase}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    const data = await request(url, _requestOptions.method, null, _requestOptions.headers)
    return data.results
  }

  async function getMovieDetails (movieId) {
    const url = `${_apiBase}/movie/${movieId}?language=en-US`
    const data = await request(url, _requestOptions.method, null, _requestOptions.headers)
    return data
  }

  async function getMovieCredits (movieId) {
    const url = `${_apiBase}/movie/${movieId}/credits?language=en-US`
    const data = await request(url, _requestOptions.method, null, _requestOptions.headers)
    return data
  }

  async function getMovieReviews (movieId) {
    const url = `${_apiBase}/movie/${movieId}/reviews?language=en-US&page=1`
    const data = await request(url, _requestOptions.method, null, _requestOptions.headers)
    return data
  }

  return {
    loading,
    error,
    clearError,
    getTrendingMovies,
    getSearchedMovies,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews
  }
}

export default useMoviedbService