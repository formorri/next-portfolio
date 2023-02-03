import React from 'react'
import styles from './Hero.module.scss'
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
  return (
    <main className={styles.container}>
      {/* <Image
        src={images.hero}
        alt="background"
        className={styles.image}
        loading="lazy"
      /> */}
      <div className={styles['column-1']}>
        <p>Sunt nisi enim aliqua do cillum mollit ut sunt sint do. Ex do elit cillum ea tempor do aute fugiat irure irure. Sint mollit et ad enim officia aliquip mollit. In nisi ea veniam nostrud pariatur minim tempor laboris. Ipsum enim ad enim veniam.</p>
      </div>
      <div className={styles['column-2']}>
        <h1 className={styles['column-2__text']}>Hello my name is Lam</h1>
      </div>
    </main>
  )
}

export default Hero