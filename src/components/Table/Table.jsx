import React from 'react'

import Coutnry from '../Country/Country'
import styles from './Table.module.css'
import sortBy from '../../functions/sort'
import {KeyboardArrowDownRounded,KeyboardArrowUpRounded} from '@material-ui/icons'

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      
        <KeyboardArrowDownRounded />
      
    );
  } else {
    return (
      
        <KeyboardArrowUpRounded  />
      
    );
  }
};

const Table = ({countries}) => {
  const [direction, setDirection] = React.useState()
  const [value, setValue] = React.useState()
  const orderedCountries = sortBy(countries,direction,value)

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };
  return (
    <>
      <div className={styles.tableTop}>
        <div className={styles.buttonBlock} onClick={() => setValueAndDirection('name')}>
        {value === "name" && <SortArrow direction={direction} />}
          <button className={styles.button}>Name</button>
        </div>

        <div className={styles.buttonBlock} onClick={() => setValueAndDirection('population')}>
        {value === "population" && <SortArrow direction={direction} />}
          <button className={styles.button}>Population</button>
        </div>

        <div className={styles.buttonBlock} onClick={() => setValueAndDirection('area')}>
        {value === "area" && <SortArrow direction={direction} />}
          <button className={styles.button}>Area(km²)</button>
        </div>


      </div>
      <ul>
        {orderedCountries.map(country => (
          
          <Coutnry  {...country} key={country.name}/>
          
        ))}
      </ul>
    </>
  )
}

export default Table
