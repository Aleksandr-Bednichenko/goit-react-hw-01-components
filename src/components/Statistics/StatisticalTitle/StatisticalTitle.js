import React from "react";
import PropTypes from 'prop-types';
import styles from './StatisticalTitle.module.css'


const StatisticalTitle = ({title}) => ({title} && <h2 className={styles.title}>{title}</h2>)
    
    



StatisticalTitle.defaultProps = {
    title: ' '
}

StatisticalTitle.propTypes = {
    title: PropTypes.string,
  };

export default StatisticalTitle;