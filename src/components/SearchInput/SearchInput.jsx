import React from 'react'
import styles from './SearchInput.module.css'
const SearchInput = () => {
  return (
    <div>
      <input className={styles.input} type="text" placeholder="Enter a name,region or subregion"/>
      
    </div>
  )
}

export default SearchInput
