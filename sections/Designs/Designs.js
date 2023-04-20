import React, { useState, useEffect } from 'react'
import styles from './Designs.module.scss'
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from '../../components';

const designs = [
    {
        key: 1,
        image: 'design1',
        title: 'Grab',
        pdf: 'Grab.pdf',
        videoLink:'https://youtu.be/P1lZggq4KLo'
    },
    {
        key: 2,
        image: 'design2',
        title: 'Petronas Chemicals',
        pdf: 'Petronas-Chemical.pdf',
        videoLink:'https://youtu.be/Yb4zOvGBk_o'
    },
    {
        key: 3,
        image: 'design3',
        title: 'Sime Darby',
        pdf: 'Sime-Darby.pdf',
        videoLink:'https://youtu.be/EFj-ze39xc8'
    },
    {
        key: 4,
        image: 'design4',
        title: 'UMW Holdings',
        pdf: 'UMW.pdf',
        videoLink:'https://youtu.be/6PT4_QMifiM'
    },
    {
        key: 5,
        image: 'design5',
        title: 'FGV Transport',
        pdf: 'FGV-Transport.pdf',
        videoLink:'https://youtu.be/A6jBPZKnjeI'
    },
]

const Designs = () => {
    return (
        <div>
            <Carousel>
                {designs.map((item) => {
                    return (
                        <div className={styles.container}>
                            <div className={styles.preview}>
                                <Image
                                    src={images[item.image]}
                                    alt='showcase-design'
                                    className={styles['showcase-design']}
                                    loading='lazy'
                                />
                                <div className={styles.link} >
                                    <Link href={`pdf/${item.pdf}`} target='_blank'>
                                        <div className={styles['button-container']}>
                                            <button className={styles['design-button']}>
                                                <div className={styles['inner']}>
                                                    <div className={styles['button-text']}>
                                                        View The Design
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </Link>
                                    <a href={item.videoLink} target='_blank'>
                                        <div className={styles['button-container']}>
                                            <button className={styles['design-button']}>
                                                <div className={styles['inner']}>
                                                    <div className={styles['button-text']}>
                                                        Watch the Demo
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.name}>{item.title}</div>
                        </div>
                    );
                })}

            </Carousel>
        </div>
    )
}

export default Designs