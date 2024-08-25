import React from "react";
import styles from "./CertificationCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificationCard = ({
  certification: { title, imageSrc, description, date, certificateLink, credentialLink },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>{date}</p>
      <div className={styles.links}>
        {/* <button className={styles.link} onClick={() => window.open(certificateLink, '_blank')}>Show Certificate</button> */}
        <button className={styles.link} onClick={() => window.open(credentialLink, '_blank')}>Show Credential</button>
      </div>
    </div>
  );
};
