import React from "react";
import ProfileImg from "../ProfileImg/ProfileImg";
import ProfileStats from "../ProfileStats/ProfileStats";
import user from "../../../user.json";
import styles from "./Profile.module.css"

const Profile = () =>{
    
    return <div className={styles.profile}>
        <p>Задание 1</p>
        <ProfileImg
        src = {user.avatar}        
        name = {user.name}
        tag = {user.tag}
        location = {user.location}/> 
        <ProfileStats
         followers = {user.stats.followers}
         views =  {user.stats.views}
         likes =  {user.stats.likes}
         />
    </div>
}
 export default Profile;