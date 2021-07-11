import React from "react";
import styles from './TransactionsBody.module.css'

const TransactionBody = ({id,type,amount,currency}) => (
 <tr className={styles.elements} key={id}>
   <td className={styles.element}>{type}</td>
   <td className={styles.element}>{amount}</td>
   <td className={styles.element}>{currency}</td>
  </tr>
  )
export default TransactionBody;