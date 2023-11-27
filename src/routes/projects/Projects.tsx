import React from 'react';
import './projects.css';
import { clientProjects, sideProjects } from './projectData';
import Project from '../../components/project/Project';

const Projects = () => {
  return (
    <div className="content">
      <section className="section">
        <h1>✏️ Some cool things I've worked on</h1>
        <p className="disclaimer">
          🚧&nbsp;
          <i>
            Note: This page is currently under construction. Individual case study pages and more
            descriptive content will launch the week of December 5, 2023. Currently, live and interactive
            sites are linked from GitHub. Stay tuned!
          </i>
        </p>
      </section>
      <section className="projects__section">
        <h2>👩🏼‍💼 Client Projects</h2>
        {clientProjects.map((project) => (
          <Project project={project} />
        ))}
      </section>
      <section className="projects__section">
        <h2>💃🏼 Fun projects</h2>
        {sideProjects.map((project) => (
          <Project project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
