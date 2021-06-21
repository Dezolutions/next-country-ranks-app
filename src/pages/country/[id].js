import axios from 'axios'
import React from 'react'
import  Link  from 'next/link'
import Layout from '../../Layout/Layout'
import styles from './country.module.css'
const PageOfCountry = ({ country }) => {

  return (
    <Layout>
      <Link href='/' >
        <div className={styles.linkBlock} ><p className={styles.link}>back to list</p></div>
      </Link>
      <div className={styles.card}>
        <img className={styles.img} src={country.flag} alt="" />
        <div className={styles.descr}>
          <h2 className={styles.title} >{country.name}</h2>
          <p className={styles.region} >{country.region}</p>
          <div className={styles.block} >
            <div className={styles.descrItemFirst}>
              <h2 className={styles.count} >{country.population}</h2>
              <p>Population</p>
            </div>
            <div className={styles.descrItem}>
              <h2 className={styles.count} >{country.area}</h2>
              <p>Area(km²)</p>
            </div>
          </div>
          <div>
            <div className={styles.descrProperty} ><p>Capital:</p> <strong>{country.capital}</strong></div>
            <div className={styles.descrProperty} ><p>Native name:</p> <strong>{country.nativeName}</strong></div>
            <div className={styles.descrProperty} ><p>Gini:</p> <strong>{country.gini}%</strong></div>
            <div className={styles.descrProperty} ><p>Currencies:</p> <strong>{country.currencies.map(({name}) => name).join(',')}</strong></div>
            <div className={styles.descrProperty} ><p>Languages:</p> <strong>{country.languages.map(({name}) => name).join(',')}</strong></div>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

export default PageOfCountry

export const getServerSideProps = async ({ params }) => {

  const { data: country } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${params.id}`)
  return {
    props: { country }
  }
}
