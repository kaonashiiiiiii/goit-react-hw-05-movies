import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li key='Home'>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? styles.active : ""
          }>
            Home
          </NavLink>
        </li>
        <li key='Movies'>
          <NavLink to="/movies" className={({ isActive }) =>
            isActive ? styles.active : ""
          }>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar