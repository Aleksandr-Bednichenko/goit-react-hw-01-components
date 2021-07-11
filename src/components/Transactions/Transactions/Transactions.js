import React from "react";
import TransactionHeader from "../TransactionsHeader/TransactionsHeader";
import TransactionBody from "../TransactionsBody/TransactionsBody";
import PropTypes from 'prop-types';
import styles from'./Transactions.module.css'

const Transactions = ({transactions}) =>( 
<>
<p>Задание 4 </p> 
    <table className={styles.history}>       
        <TransactionHeader
        type = "Type"
        amount = "Amount"
        currency = "Currency"
        />
        <tbody className={styles.table}>
        {transactions.map((transaction) => (
        <TransactionBody
        id = {transaction.id}
        type = {transaction.type}
        amount = {transaction.amount}
        currency = {transaction.currency}
        />
        ))}
        </tbody>

     </table>
</>
)

Transactions.propTypes = {   
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };
 export default Transactions;