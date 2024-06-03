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
        <div className={styles.links}>
       <a href="https://github.com/shrinivask007" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="your-github-username" height="30" width="40" /></a>
       <a href="https://linkedin.com/in/shrinivas kathare" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="shrinivas kathare" height="30" width="40" /></a>
       <a href="https://instagram.com/iamshree_007" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="iamshree_007" height="30" width="40" /></a>  
       <a href="https://www.leetcode.com/shrinivassk18" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="shrinivassk18" height="30" width="40" /></a>
       <a href="https://auth.geeksforgeeks.org/user/shrinivaskathare" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="shrinivaskathare" height="30" width="40" /></a>
       <a href="https://www.hackerrank.com/shrinivas007" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="shrinivas007" height="30" width="40" /></a>
       <a href="https://twitter.com/iamshree_007" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="iamshree_007" height="30" width="40" /></a>
       <a href="https://fb.com/hriniva.kathare.5" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="hriniva.kathare.5" height="30" width="40" /></a>
       </div>
      </div>
      <img src={getImageUrl("hero/myPic.png")} alt="Hero Image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
