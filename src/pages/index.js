import React from 'react'
import SearchInput from '../components/SearchInput/SearchInput'

import Table from '../components/Table/Table'
import Layout from '../Layout/Layout'
import styles from '../styles/Home.module.css'

const Home = ({countries}) => {
  console.log(countries)
  return (
    <>
      <Layout>
        <div className={styles.headerTop}>
          <div className={styles.found}>Found {countries.length} countries</div>
          <SearchInput/>
        </div>
        <Table countries = {countries}/>
      </Layout>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all")
  const countries = await res.json()
  return {
    props: {
      countries
    }
  }
}
