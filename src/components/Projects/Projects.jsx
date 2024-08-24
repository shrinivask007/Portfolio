import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [toggle, setToggle] = useState('web app');

  const filteredProjects = toggle === 'all' ? projects : projects.filter((project) => project.category === toggle);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      {/* Toggle Button Group */}
      <div className={styles.toggleButtonGroup}>
        <div
          className={`${styles.toggleButton} ${toggle === 'all' ? styles.active : ''}`}
          onClick={() => setToggle('all')}
        >
          All
        </div>
        <div className={styles.divider}></div>
        <div
          className={`${styles.toggleButton} ${toggle === 'web app' ? styles.active : ''}`}
          onClick={() => setToggle('web app')}
        >
          WEB APP'S
        </div>
        <div className={styles.divider}></div>
        <div
          className={`${styles.toggleButton} ${toggle === 'android app' ? styles.active : ''}`}
          onClick={() => setToggle('android app')}
        >
          ANDROID APP'S
        </div>
        <div className={styles.divider}></div>
        <div
          className={`${styles.toggleButton} ${toggle === 'machine learning' ? styles.active : ''}`}
          onClick={() => setToggle('machine learning')}
        >
          MACHINE LEARNING
        </div>
      </div>

      {/* Render filtered projects */}
      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};











// import React from "react";

// import styles from "./Projects.module.css";

// import projects from "../../data/projects.json";
// import { ProjectCard } from "./ProjectCard";

// export const Projects = () => {
//   return (
//     <section className={styles.container} id="projects">
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         {projects.map((project, id) => {
//           return <ProjectCard key={id} project={project} />;
//         })}
//       </div>
//     </section>
//   ); 
// };