import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="EmailIcon" />
                <a href="mailto:shrinivassk18@gmail.com">shrinivassk18@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="EmailIcon" />
                <a href="https://www.linkedin.com/in/shrinivas-kathare/">linkedin/shrinivas-kathare</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="EmailIcon" />
                <a href="https://github.com/shrinivask007">github.com/shrinivask007</a>
            </li>
        </ul>
    </footer>
  )
}
