import React from "react";
import defaultImage from "../default.jpg";
import Friends from '../../../friends.json';
import styles from './FriendsListItem.module.css'



const FriendsListItem = () => (
    <ul className={styles.list}>
  {Friends.map((friend) =>(    
    <li className={styles.item} key={friend.id}>
    <span className={friend.isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={friend.avatar} alt="Foto profile" width="48" />
    <p className="name">{friend.name}</p>
     </li>
  ))}  
  </ul>
    
    
   
)

FriendsListItem.defaultProps = {
    src: defaultImage
}



export default FriendsListItem;