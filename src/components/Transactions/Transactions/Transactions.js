import React from "react";
import TransactionHeader from "../TransactionsHeader/TransactionsHeader";
import TransactionBody from "../TransactionsBody/TransactionsBody";
import styles from'./Transactions.module.css'

const Transactions = () =>( 
<>
    
    <table className={styles.history}>   
    <p>Задание 4</p> 
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