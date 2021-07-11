import React from "react";
import defaultImage from "../default.jpg";
import styles from './FriendsListItem.module.css'



const FriendsListItem = ({id,isOnline,avatar,name}) => (
   <li className={styles.item} key={id}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={avatar} src={avatar} alt="Foto profile" width="48" />
    <p className="name">{name}</p>
  </li>  
)

FriendsListItem.defaultProps = {
    avatar: defaultImage
}
export default FriendsListItem;