import React from 'react'
import styles from './creditItem.module.css'

const defaultImg = 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
const _baseImageLink = 'https://image.tmdb.org/t/p/w500/'
const CreditItem = ({ actor }) => {
  const imgSrc = actor.profile_path ? `${_baseImageLink}${actor.profile_path}` : defaultImg 
  return (
    <div className={styles.creditItemWrapper}>
      <img src={imgSrc} alt="" />
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
      <br />
    </div>
  )
}

export default CreditItem