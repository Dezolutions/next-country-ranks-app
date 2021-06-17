import React from 'react'
import SearchInput from '../components/SearchInput/SearchInput'
import axios from 'axios'
import Table from '../components/Table/Table'
import Layout from '../Layout/Layout'
import styles from '../styles/Home.module.css'

const Home = ({ countries }) => {
  const [keyword, setKeyword] = React.useState('')
  console.log(countries)
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)
  )
  const onInputChange = e => {

    setKeyword(e.target.value.toLowerCase())
  }
  return (

    <Layout>
      <div className={styles.headerTop}>
        <div className={styles.found}>Found {countries.length} countries</div>
        <SearchInput onChange={onInputChange} />
      </div>
      <Table countries={filteredCountries} />
    </Layout>

  )
}

export default Home

export const getStaticProps = async () => {
  const { data: countries } = await axios.get("https://restcountries.eu/rest/v2/all")
  return {
    props: {
      countries
    }
  }
}
