import React from "react";
import PropTypes from 'prop-types';
import styles from './TransactionsHeader.module.css'


const TransactionHeader = ({type,amount,currency}) =>(   
  <thead className={styles.head}>      
    <tr className={styles.position}>
      <th className={styles.title}>{type}</th>
      <th className={styles.title}>{amount}</th>
      <th className={styles.title}>{currency}</th>
    </tr>
  </thead>
)

TransactionHeader.defaultProps = {
  type: ' ',
  amount:' ',
  currency: ' ',
}

TransactionHeader.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
 export default TransactionHeader;