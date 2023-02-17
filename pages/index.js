import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, { useRef, useState, useEffect } from 'react'
import { images } from '../constants'
import { Container, Navbar, Section } from '../components'
import { Hero, Showcase, Designs } from '../sections'
import Link from 'next/link';

export default function Home() {
  const [section, setSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      const sections = [
        {
          name: "Hi! I'm Lam Zi Xin",
          top: 0,
          bottom: document.querySelector("#about").offsetHeight
        },
        {
          name: "Completed Websites",
          top: document.querySelector("#work").offsetTop - (window.innerHeight / 2),
          bottom: document.querySelector("#design").offsetTop - (window.innerHeight / 2)
        },
        {
          name: "See My Designs",
          top: document.querySelector("#design").offsetTop - (window.innerHeight / 2),
          bottom: document.querySelector("#footer").offsetTop - (window.innerHeight / 2)
        },
      ];

      const scrollPos = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (scrollPos >= section.top && scrollPos < section.bottom) {
          setSection(section.name);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Lam's Portfolio</title>
        <meta name="description" content="Portfolio with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
        <div className={styles.constant}>
          {section}
        </div>
        <Section id='about'>
          <Hero />
        </Section>
        <Section id='work'>
          <Showcase />
        </Section>
        <Section id='design'>
          <Designs />
        </Section>
        <Section>
          <Link href='#about' className={styles['back-to-top']}>
            <div className={styles.scroll}>
              <Image
                src={images.arrow}
                alt='scroll'
                className={styles['scroll-logo']}
                loading='lazy'
              />
            </div>
            Back To Top
          </Link>
        </Section>
        <Section id='footer'>
          <div className={styles.footer}>

            <div className={styles.decorative}>
              <div className={`${styles.red} ${styles.decorative__circle}`}></div>
              <div className={`${styles.yellow} ${styles.decorative__circle}`}></div>
              <div className={`${styles.green} ${styles.decorative__circle}`}></div>
            </div>

            <div className={styles['footer__text']}>
              Copyright © {(new Date().getFullYear())} Lam Zi Xin. All rights reserved.
            </div>
          </div>

        </Section>

      </Container>
    </div>
  )
}
