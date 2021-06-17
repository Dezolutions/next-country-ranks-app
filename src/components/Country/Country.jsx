import React from 'react'
import styles from './Country.module.css'
import  Link  from 'next/link'
const Country = React.forwardRef(function Country({flag,alpha3Code,area,name,gini,population},ref) {
  return (
    <Link href={`/country/${alpha3Code}`} >
      <div ref={ref} className={styles.country}>
        <div className={styles.countryName}>
          <img src={flag} className={styles.flag} alt="" />
          <p>{name}</p>
        </div>
        <p className={styles.countryItem} >{population}</p>
        <p className={styles.countryItem} >{area}</p>
        <p className={styles.countryItem} >{gini}</p>
  
      </div>
    </Link>
  )
})

export default Country
