import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, { useRef, useState, useEffect } from 'react'
import { images } from '../constants'
import { Container, Navbar, Section } from '../components'
import { Hero } from '../sections'

export default function Home() {
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
          Hi, I'm Lam Zi Xin
        </div>
        <Section>
          <Hero />
        </Section>

      </Container>
    </div>
  )
}
