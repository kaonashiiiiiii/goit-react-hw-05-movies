import React from 'react'
import styles from './creditItem.module.css'

const _baseImageLink = 'https://image.tmdb.org/t/p/w500/'
const CreditItem = ({ actor }) => {
  return (
    <div className={styles.creditItemWrapper}>
      <img src={`${_baseImageLink}${actor.profile_path}`} alt="" />
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
      <br />
    </div>
  )
}

export default CreditItem