import React from 'react';
import './projects.css';
import { clientProjects, sideProjects } from './projectData';
import Project from '../../components/project/Project';

const Projects = () => {
  return (
    <div className="content">
      <section className="section">
        <h1>✏️ Some cool things I've worked on</h1>
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
