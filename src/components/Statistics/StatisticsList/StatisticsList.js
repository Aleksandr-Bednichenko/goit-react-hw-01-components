import React from "react";
import  Statistics from "../../../statistical-data.json";
import styles from './StatisticsList.module.css'



const StatisticsList = () => (
    <ul className={styles.list}>       
     {Statistics.map((statistic) => (
        <li className={styles.item} key = {statistic.id}>
         <span className={styles.label}>.{statistic.label}  </span>
         <span className={styles.percentage}>{statistic.percentage} %</span>
       </li>
     ))} 
  </ul>
   
)
export default StatisticsList;