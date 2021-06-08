import React from 'react'
import styles from './Country.module.css'
const Coutnry = ({flag,area,name,gini,population}) => {
  return (
    <div className={styles.country}>
      <div className={styles.countryName}>
        <img src={flag} className={styles.flag} alt="" />
        <p>{name}</p>
      </div>
      <p className={styles.countryItem} >{population}</p>
      <p className={styles.countryItem} >{area}</p>
      <p className={styles.countryItem} >{gini}</p>

    </div>
  )
}

export default Coutnry
