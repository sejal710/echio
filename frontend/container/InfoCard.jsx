import React from 'react';
import styles from '../css/InfoCard.module.css';

const InfoCard = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Linkedin-portraits-2.jpg?fit=800%2C1200&ssl=1"
          alt="Profile"
        />
      </div>
      <div className={styles.info}>
        <p><strong>Name:</strong> {data.Name}</p>
        <p><strong>Detail:</strong> {data.Detail}</p>
        <p><strong>Popularity:</strong> {data.Popularity}</p>
        <p><strong>Categories:</strong>{data.Categories}</p>
        <p><strong>Platform:</strong>{data.Platform}</p>
        <p><strong>Campaign preference:</strong>{data.Campagnprefrence}</p>
      </div>
    </div>
  );
};

export default InfoCard;


