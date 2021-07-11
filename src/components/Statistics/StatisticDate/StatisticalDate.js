import React from "react";
import StatisticsList from "../StatisticsList/StatisticsList";
import PropTypes from 'prop-types';
import styles from './StatisticalDate.module.css'

const StatisticalDate = ({title, stats}) =>(
<>
<section className={styles.container}>
    <p>Задание 2</p>
    {title && <h2 className={styles.title}>{title}</h2>}  
    <ul className={styles.list}> 
    {stats.map((statistic) => (
    <StatisticsList
    id = {statistic.id}
    label = {statistic.label}
    percentage ={statistic.percentage}/>))
    }
     </ul>
    </section>
    </>)

StatisticalDate.defaultProps = {
    title: ' '
}

StatisticalDate.propTypes = {
    title: PropTypes.string,
  };

export default StatisticalDate;
    