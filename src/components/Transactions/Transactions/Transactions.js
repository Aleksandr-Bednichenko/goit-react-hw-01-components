import React from "react";
import TransactionHeader from "../TransactionsHeader/TransactionsHeader";
import TransactionBody from "../TransactionsBody/TransactionsBody";
import styles from'./Transactions.module.css'

const Transactions = () =>( 
<>
<p>Задание 4 </p> 
    <table className={styles.history}>       
        <TransactionHeader
        type = "Type"
        amount = "Amount"
        currency = "Currency"
        />
        <TransactionBody/>

     </table>
</>
)
 export default Transactions;