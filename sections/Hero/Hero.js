import React, { useState, useEffect } from 'react'
import styles from './Hero.module.scss'
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';



const Hero = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <main className={styles.container}>
      <div className={styles.scroll}>
        <Image
          src={images.arrow}
          alt='scroll'
          className={styles['scroll-logo']}
          loading='lazy'
        />
      </div>
      <div className={styles.grid}>
        <div className={styles.skills}>
          <div className={styles.decorative}>
            <div className={styles.red}></div>
            <div className={styles.yellow}></div>
            <div className={styles.red}></div>
          </div>
          <div>
            Last login: {date.toLocaleTimeString([], { day: '2-digit', month: '2-digit', year: '2-digit', date: '2-digit', hour: '2-digit', minute: '2-digit' })}
          </div>
          <div>
            lamzixin@Skills ~ % ls
          </div>
          <ul>
            {[
              'Next.js',
              'React.js',
              'Node.js',
              'JQuery',
              'SASS',
              'HTML',
              'CSS',
              'JS ES6',
              'PWA',
              'Github',
              'AWS Amplify',
              'Netlify',
              'Vercel',
              'Material UI',
              'Bootstrap',
              'UIKIT',
              'Adobe XD',
              'Adobe Illustrator',
              'Adobe Photoshop',
            ].map((item, index) => (
              <li
                key={item + index}
              >
                {item}
              </li>
            ))}
          </ul>


        </div>

      </div>
    </main>
  )
}

export default Hero