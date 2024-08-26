import React, { useState } from 'react';
import styles from './Experience.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/data';
import InfoCard from './InfoCard';

const Experience = () => {
  const [showExperience, setShowExperience] = useState(true);

  return (
    <div className={styles.container} id="experience">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {showExperience ? 'My Experience' : 'My Education'}
        </div>
        <div className={styles.desc}>Explore my Professional and Educational journey through this interactive timeline</div>
        <div className={styles.toggleButtonContainer}>
          <button
            className={`${styles.toggleButton} ${showExperience ? styles.toggleButtonActive : ''}`}
            onClick={() => setShowExperience(true)}
          >
            Experiences
          </button>
          <button
            className={`${styles.toggleButton} ${!showExperience ? styles.toggleButtonActive : ''}`}
            onClick={() => setShowExperience(false)}
          >
            Education
          </button>
        </div>
        <div className={styles.timelineSection}>
          <Timeline align="alternate">
            {showExperience
              ? experiences.map((exp) => (
                  <TimelineItem key={exp.id}>
                    <TimelineSeparator>
                      <TimelineDot className={styles.timelineDot} variant="outlined" />
                      {exp.id !== experiences[experiences.length - 1].id && <TimelineConnector className={styles.timelineConnector} />}
                    </TimelineSeparator>
                    <TimelineContent className={`${styles.timelineContentStyled} ${exp.id % 2 === 0 ? styles.timelineContentStyledLeft : styles.timelineContentStyledRight}`}>
                      <InfoCard item={exp} isExperience={true} />
                    </TimelineContent>
                  </TimelineItem>
                ))
              : education.map((edu) => (
                  <TimelineItem key={edu.id}>
                    <TimelineSeparator>
                      <TimelineDot className={styles.timelineDot} variant="outlined" />
                      {edu.id !== education[education.length - 1].id && <TimelineConnector className={styles.timelineConnector} />}
                    </TimelineSeparator>
                    <TimelineContent className={`${styles.timelineContentStyled} ${edu.id % 2 === 0 ? styles.timelineContentStyledLeft : styles.timelineContentStyledRight}`}>
                      <InfoCard item={edu} isExperience={false} />
                    </TimelineContent>
                  </TimelineItem>
                ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
