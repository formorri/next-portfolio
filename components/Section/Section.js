import React from 'react'
import styles from './Section.module.scss';

const Section = ({ children, className, ...rest }) => {
    let sectionClassName = styles.section;
  
    if ( className ) {
      sectionClassName = `${sectionClassName} ${className}`;
    }
  
    return (
      <div {...rest} className={sectionClassName} >
        { children }
      </div>
    )
  }


export default Section