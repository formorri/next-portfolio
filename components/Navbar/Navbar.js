import styles from './Navbar.module.scss';
import React from 'react';
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';

const Navbar = ({ active }) => {
    return (
        <nav className={styles.container}>
            <div className={styles.icon}>
                <Link href='#home'>
                    Lam
                </Link>
            </div>
            <ul>
                {['showcase'].map((item, index) => (
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
        </nav>
    )
}

export default Navbar
