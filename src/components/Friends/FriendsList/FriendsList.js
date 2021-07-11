import React from "react";
import FriendsListItem from "../FriendsListItem/FriendsListItem";
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css'

const FriendsList = ({friends}) =>{
    
    return <div className ={styles.profile}>
        <p>Задание 3</p> 
        <ul className={styles.list}>
        {friends.map((friend) =>(   
        <FriendsListItem
        id = {friend.id}
        isOnline = {friend.isOnline}
        name = {friend.name}
        avatar = {friend.avatar}
        />   
        ))} 
      </ul>
    </div>
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };
 export default FriendsList;