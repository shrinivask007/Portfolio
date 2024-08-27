import React, { useState } from 'react';
import styles from './Skills.module.css'; // Import the CSS module
import { skills, certifications } from '../../data/data';
import { CertificationCard } from './CertificationCard'; // Import the CertificationCard component

export const Skills = () => {
  const [activeSection, setActiveSection] = useState('skills'); // State to track active section

  return (
    <div className={styles.container} id="skills">
      <div className={styles.wrapper}>
        <div className={styles.title}>{activeSection === 'skills' ? 'SKILLS' : 'CERTIFICATIONS'}</div>
        <div className={styles.desc}>This are my Skills and Certifications </div>
        <div className={styles.toggleButtonContainer}>
          <button
            className={`${styles.toggleButton} ${activeSection === 'skills' ? styles.active : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button
            className={`${styles.toggleButton} ${activeSection === 'certifications' ? styles.active : ''}`}
            onClick={() => setActiveSection('certifications')}
          >
            Certifications
          </button>
        </div>

        {activeSection === 'skills' && (
          <div className={styles.skillsContainer}>
            {skills.map((skill) => (
              <div className={styles.skill} key={skill.title}>
                <div className={styles.skillTitle}>{skill.title}</div>
                <div className={styles.skillList}>
                  {skill.skills.map((item) => (
                    <div className={styles.skillItem} key={item.name}>
                      <img src={item.image} alt={item.name} className={styles.skillImage} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'certifications' && (
          <div className={styles.skillsContainer}>
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} certification={cert} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
