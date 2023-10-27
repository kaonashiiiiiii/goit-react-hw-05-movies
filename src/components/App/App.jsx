import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cast, Navbar, Reviews, Spinner } from '../../components'
import styles from './app.module.css'

const Home = lazy(() => import('../../pages/HomePage/Home'))
const Movies = lazy(() => import('../../pages/MoviesPage/Movies'))
const MovieDetails = lazy(() => import('../../pages/MovieDetailsPage/MovieDetails'))

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/movies/:movieId" element={ <MovieDetails />}>
            <Route path="cast" element={ <Cast />}/>
            <Route path="reviews" element={ <Reviews />}/>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App
