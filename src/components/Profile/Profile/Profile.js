import React from "react";
// import ProfileImg from "../ProfileImg/ProfileImg";
import ProfileStats from "../ProfileStats/ProfileStats";
import defaultImage from "../../Profile/default.jpg";
import styles from "./Profile.module.css"
import PropTypes from 'prop-types';

const Profile = ({src,name,tag,location,stats}) =>{
    
    return <div className={styles.profile}>
        <p>Задание 1</p>
        
        <div className ={styles.description}>
        <img
         src={src}
         alt="Аватар пользователя"
         className ={styles.avatar}
     />
     <p className ={styles.name}>{name}</p>
    <p className ={styles.tag}>{tag}</p> 
    <p className ={styles.location}>{location}</p>
   </div>
        <ProfileStats
         followers = {stats.followers}
         views =  {stats.views}
         likes =  {stats.likes}
         />
    </div>
}
Profile.defaultProps = {
    src: defaultImage
}

Profile.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };
 export default Profile;