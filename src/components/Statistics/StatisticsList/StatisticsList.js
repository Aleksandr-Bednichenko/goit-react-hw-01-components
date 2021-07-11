import React from "react";
import styles from './StatisticsList.module.css'
import PropTypes from 'prop-types';



const StatisticsList = ({id,label,percentage}) => (
       <li className={styles.item} key = {id}>
         <span className={styles.label}>.{label}  </span>
         <span className={styles.percentage}>{percentage} %</span>
       </li>   
)
StatisticsList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsList;