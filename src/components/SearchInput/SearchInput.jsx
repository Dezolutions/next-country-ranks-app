import React from 'react'
import styles from './SearchInput.module.css'
import SearchRounded from "@material-ui/icons/SearchRounded";
const SearchInput = ({...rest}) => {
  return (
    <div className={styles.search}>
      <SearchRounded className={styles.icon}/>
      <input className={styles.input} {...rest} type="text" placeholder="Enter a name,region or subregion"/>
    </div>
  )
}

export default SearchInput
