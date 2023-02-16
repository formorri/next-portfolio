import React, { useState, useEffect } from 'react'
import styles from './Showcase.module.scss'
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';

const data = [
    {
        key: 1,
        name: 'BFFGram - All In One App',
        description: 'BFF Gram aims to be one of the most popular social networking platforms in the globe after launching in the UK. This multi-feature application will be known for its family/friends/advisors’ networking capabilities.',
        tech: ['Next.js', 'React.js', 'SASS', 'AWS Amplify', 'Material UI'],
        link: 'https://www.bffgram.com/',
        image: 'showcaseWebsite1'
    },
]

const Showcase = () => {
    return (
        <>
            {data.map((project) => (
                <div key={project.key} className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles['info__header']}>Featured Projects</div>
                        <div className={styles['info__info']}>
                            <p className={styles['project-name']}>{project.name}</p>
                            <div className={styles.description}>
                                <p>{project.description}</p>
                                <Image
                                    src={images.divider}
                                    alt='divider'
                                    className={styles['divider']}
                                    loading='lazy'
                                />
                                <ul className={styles.tech}>
                                    {project.tech.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <Link href={project.link} target='_blank'>
                                    <div className={styles['button-container']}>
                                        <button className={styles['website-button']}>
                                            <div className={styles['inner']}>
                                                <div className={styles['button-text']}>
                                                    Visit The Website
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.preview}>
                        <div className={styles.decorative}>
                            <div className={`${styles.red} ${styles.decorative__circle}`}></div>
                            <div className={`${styles.yellow} ${styles.decorative__circle}`}></div>
                            <div className={`${styles.green} ${styles.decorative__circle}`}></div>
                        </div>
                        <Image
                            src={images[project.image]}
                            alt='showcase-website'
                            className={styles['showcase-website']}
                            loading='lazy'
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Showcase