import React, { useState } from 'react'
import styles from './searchbar.module.css'
const Searchbar = ({ setQueryParam }) => {
  const [value, setValue] = useState('')
  function doSearch () {
    const query = value.toLocaleLowerCase().trim()
    if (!query) return
    setQueryParam(query)
  }

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.searchInput}/>
      <button onClick={doSearch} className={styles.searchButton}>Search</button>
    </div>
  )
}

export default Searchbar