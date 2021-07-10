import React from "react";

import FriendsListItem from "../FriendsListItem/FriendsListItem";
import styles from './FriendsList.module.css'

const FriendsList = () =>{
    
    return <div className ={styles.profile}>
        <p>Задание 3</p>   
        <FriendsListItem/>   
     
    </div>
}
 export default FriendsList;