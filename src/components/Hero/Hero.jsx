import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi ,I'm Shrinivas</h1>
            <p className={styles.description}>Passionate IT Engineering student from VIIT,Pune with good programming skills and a focus on delivering exceptional results. Constantly seeking new knowledge and experiences, I stay updated with the latest trends.</p>
             <a href="mailto:shrinivassk18@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/myPic.png")} alt="Hero Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
