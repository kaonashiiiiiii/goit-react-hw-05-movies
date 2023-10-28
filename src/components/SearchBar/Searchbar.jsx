import React, { useState } from 'react'
import styles from './searchbar.module.css'
const Searchbar = ({ setQueryParam }) => {
  const [value, setValue] = useState('')
  function onSubmit (e) {
    e.preventDefault()
    const query = value.toLocaleLowerCase().trim()
    if (!query) return
    setQueryParam(query)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.searchInput}/>
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  )
}

export default Searchbar