import React from "react";
import transactions from "../../../transactions.json";
import styles from './TransactionsBody.module.css'

const TransactionBody = () => (
  <tbody className={styles.table}>
    {transactions.map((transaction) => (
      <tr className={styles.elements} key={transaction.id}>
        <td className={styles.element}>{transaction.type}</td>
        <td className={styles.element}>{transaction.amount}</td>
        <td className={styles.element}>{transaction.currency}</td>
      </tr>
    ))}
  </tbody>
)
export default TransactionBody;