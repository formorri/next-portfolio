import styles from './Navbar.module.scss';
import React from 'react';
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = ({ active }) => {
    return (

        <nav className={styles.container}>
            <div className={styles.icon}>
                <Link href='#home'>
                    <Image
                        src={images.logo}
                        className={styles.logo}
                        alt='logo'
                        loading='lazy'
                    />
                </Link>
            </div>
            <ul className={styles.link}>
                {['about', 'work', 'design',].map((item, index) => (
                    <li
                        key={item + index}
                        className={active === item ? styles.active : styles.link}
                    >
                        <Link
                            href={`#${item}`}
                            key={item + index}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={styles['externals']}>
                <Link href='https://github.com/formorri' target='_blank'>
                    <div className={styles['button-container']}>
                        <button className={styles['socials']}>
                            <div className={styles['inner']}>
                                <div className={styles['button-text']}>
                                    <GitHubIcon />
                                </div>
                            </div>
                        </button>
                    </div>
                </Link>
                <Link href='https://www.linkedin.com/in/zi-xin-lam-359346192/' target='_blank'>
                    <div className={styles['button-container']}>
                        <button className={styles['socials']}>
                            <div className={styles['inner']}>
                                <div className={styles['button-text']}>
                                    <LinkedInIcon />
                                </div>
                            </div>
                        </button>
                    </div>
                </Link>
                <Link href='mailto:lamzixin95@gmail.com'>
                    <div className={styles['button-container']}>
                        <button className={styles['contact']}>
                            <div className={styles['inner']}>
                                <div className={styles['button-text']}>
                                    Contact
                                </div>
                            </div>
                        </button>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
