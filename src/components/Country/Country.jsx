import React from 'react'
import styles from './Country.module.css'
import  Link  from 'next/link'
import abbreviate from '../../functions/abbreviateNumber'

const Country = React.forwardRef(function Country({flag,alpha3Code,area,name,population},ref) {
  
  return (
    <Link href={`/country/${alpha3Code}`} >
      <div ref={ref} className={styles.country}>
        <div className={styles.countryName}>
          <img src={flag} className={styles.flag} alt="" />
          <p>{name}</p>
        </div>
        <p className={styles.countryItem} >{abbreviate(population)}</p>
        <p className={styles.countryItem} >{abbreviate(area)}</p>
      </div>
    </Link>
  )
})

export default Country
