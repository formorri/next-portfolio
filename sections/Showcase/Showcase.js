import React, { useState, useEffect } from 'react'
import styles from './Showcase.module.scss'
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';

const data = [
    {
        key: 1,
        year: '2022',
        name: 'KPJ Healthcare',
        description: 'KPJ Healthcare Berhad. Delivering What Matters to You. Integrated Annual Report 2021 and Sustainability Report 2021.',
        tech: ['HTML', 'SASS', 'UIKIT', 'JS'],
        link: 'https://kpj.listedcompany.com/misc/snapsite/ar2021/index.html',
        image: 'showcaseWebsite3'
    },
    {
        key: 2,
        year: '2022',
        name: 'Smart Axiata Cambodia',
        description: 'Smart Axiata Cambodia. Rise Together. Sustainability Report 2021.',
        tech: ['HTML', 'SASS', 'UIKIT', 'JS ES6', 'GSAP'],
        link: 'https://www.smart.com.kh/sr2021/',
        image: 'showcaseWebsite2'
    },
    {
        key: 3,
        year: '2023',
        name: 'BFFGram - All In One App',
        description: 'BFF Gram aims to be one of the most popular social networking platforms in the globe after launching in the UK. This multi-feature application will be known for its family/friends/advisors’ networking capabilities.',
        tech: ['Next.js', 'React.js', 'SASS', 'AWS Amplify', 'Material UI'],
        link: 'https://www.bffgram.com/',
        image: 'showcaseWebsite1'
    },
    {
        key: 4,
        year: '2023',
        name: 'UMW IAR 2022',
        description: 'Accelerating CREST @UMW Integrated Annual Report 2022',
        tech: ['Next.js', 'React.js', 'SASS', 'Material UI', 'CPanel'],
        link: 'https://www.annualreport.umw.com.my/',
        image: 'showcaseWebsite4'
    },
]

const reversedData= data.reverse();

const Showcase = () => {
    return (
        <>
            {reversedData.map((project) => (
                <div className={styles.container}>
                    <p className={styles.year}>{project.year}</p>
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
                            <div className={styles['preview__container']}>
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
                    </div>
                </div>
            ))}
        </>
    )
}

export default Showcase