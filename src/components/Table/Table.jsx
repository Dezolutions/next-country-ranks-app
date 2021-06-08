import React from 'react'
import Coutnry from '../Country/Coutnry'
import styles from './Table.module.css'
const Table = ({countries}) => {
  return (
    <>
      <div className={styles.tableTop}>
        <button className={styles.button}>Name</button>
        <button className={styles.button}>Population</button>
        <button className={styles.button}>Area(km²)</button>
        <button className={styles.button}>Gini</button>
      </div>
      <ul>
        {countries?.map(country => (
          <Coutnry key={country.name} {...country}/>
        ))}
      </ul>
    </>
  )
}

export default Table
