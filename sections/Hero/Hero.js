import React, { useState, useEffect } from "react"
import styles from "./Hero.module.scss"
import { images } from "../../constants"
import Image from "next/image"
import Card from "../../components/Card"
import Link from "next/link"

const Skills = [
  "Next.js",
  "React.js",
  "Vue.js",
  "Node.js",
  "JQuery",
  "SASS",
  "HTML",
  "CSS",
  "JS ES6",
  "Typescript",
  "PWA",
  "Github",
  "AWS Amplify",
  "Netlify",
  "Vercel",
  "Material UI",
  "Bootstrap",
  "UniApp",
  "UIKIT",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
]

const Experience = [
  {
    year: 2023,
    title: "Frontend Developer",
    employer: "Up DevLabs Sdn. Bhd",
  },
  {
    year: 2022,
    title: "Frontend Developer/Designer",
    employer: "Nova Fusion Sdn. Bhd",
  },
  {
    year: 2020,
    title: "R&D Engineer",
    employer: "Top Glove International",
  },
]

const Hero = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <main className={styles.container}>
      <div className={styles.scroll}>
        <Image src={images.arrow} alt="scroll" className={styles["scroll-logo"]} loading="lazy" />
      </div>
      <div className={styles.grid}>
        <div className={`${styles.info} ${styles["glassmorphism-card"]}`}>
          <p>
            I am a former research engineer turned <span className={styles["info__highlight"]}>front-end developer</span>
          </p>
        </div>
        <Image src={images.hero2} alt="profile-picture" className={styles["hero-2"]} loading="lazy" />
        <Card className={styles.skills}>
          <p className={styles["text-default"]}>
            Last login: {date.toLocaleTimeString([], { day: "2-digit", month: "2-digit", year: "2-digit", date: "2-digit", hour: "2-digit", minute: "2-digit" })}
          </p>
          <p className={styles["text-highlight"]}>lamzixin@Skills ~ % ls</p>
          <ul className={`${styles.list} ${styles["text-default"]}`}>
            {Skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card className={styles.experience}>
          <p className={styles["text-highlight"]}>lamzixin@Experience ~ %</p>
          <p className={styles["text-highlight"]}>npm i work-experience</p>
          <br></br>
          {Experience.map((item, index) => (
            <div key={index}>
              <p className={styles["text-highlight-blue"]}> &gt; {item.year}</p>
              <p className={styles["text-default"]}>{item.title}</p>
              <p className={styles["text-default"]}>{item.employer}</p>
              <br></br>
            </div>
          ))}
        </Card>
        <Image src={images.hero1} alt="public-speaking-picture" className={styles["hero-1"]} loading="lazy" />
        <div className={`${styles.tagline} ${styles["glassmorphism-card"]}`}>
          <p className={styles["tagline__text"]}>I’m a big fan of beautiful UI and clean/modular code</p>
          <p>I also enjoy public speaking and varsity debating.</p>
          <Link href="https://www.mynewshub.tv/2018/10/unimap-naib-juara-pertandingan-debat-bahasa-inggeris-di-thailand/" target="_blank">
            <div className={styles["button-container"]}>
              <button className={styles["tagline__button"]}>
                <div className={styles["inner"]}>
                  <div className={styles["button-text"]}>Read this article</div>
                </div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Hero
