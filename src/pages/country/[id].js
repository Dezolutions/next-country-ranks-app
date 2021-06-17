import axios from 'axios'
import React from 'react'
import Layout from '../../Layout/Layout'
import styles from './country.module.css'
const PageOfCountry = ({ country }) => {
  return (
    <Layout>
      <div className={styles.card}>
        <img className={styles.img} src={country.flag} alt="" />
        <div className={styles.descr}>
          <div>
            <p>Name:</p>
            <p>{country.name}</p>
          </div>
          <div>
            <p>Population:</p>
            <p>{country.population}</p>
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
