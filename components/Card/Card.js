import React from 'react'
import styles from './Card.module.scss';

const Card = ({ children, className, ...rest }) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }
  return (
    <div {...rest} className={containerClassName} >
      <div className={styles.card}>
        <div className={styles.decorative}>
          <div className={`${styles.red} ${styles.decorative__circle}`}></div>
          <div className={`${styles.yellow} ${styles.decorative__circle}`}></div>
          <div className={`${styles.green} ${styles.decorative__circle}`}></div>
        </div>
        {children}
      </div>
    </div>
  )
}


export default Card