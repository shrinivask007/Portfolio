import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Designer",  "Programmer", "Web Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, It's me Shrinivas</h1>
        <p className={styles.description}>
        I'm a <span>{text}</span> <Cursor /> <br />Passionate IT Engineering student from VIIT, Pune with good programming skills.
          Constantly seeking  new knowledge and experiences, I stay updated with the latest trends.
        </p>
        <div className={styles.heroAction}>
          <a href="mailto:shrinivassk18@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1C-Yd-0kEhtOuJ6aN0E-xV4n9MhoRzRx_/view?usp=sharing" className={styles.contactBtn}>My Resume</a>
        </div>
      </div>
      <img src={getImageUrl("hero/myPic.png")} alt="Hero Image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
