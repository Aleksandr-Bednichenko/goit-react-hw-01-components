import React from "react";
import defaultImage from "../../Profile/default.jpg";
import PropTypes from 'prop-types';
import styles from './ProfileImg.module.css'


const ProfileImg = ({src,name,tag,location}) => (
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
)

ProfileImg.defaultProps = {
    src: defaultImage
}

ProfileImg.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
  };

export default ProfileImg;