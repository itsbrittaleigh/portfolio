import React from 'react';
import { clientProjects, sideProjects } from './projectData';
import Project from '../../components/project/Project';
import { Content, Section, ProjectsSection } from './Projects.styled';

const Projects = () => {
  return (
    <Content>
      <Section>
        <h1>✏️ Some cool things I've worked on</h1>
      </Section>
      <ProjectsSection>
        <h2>👩🏼‍💼 Client Projects</h2>
        {clientProjects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ProjectsSection>
      <ProjectsSection>
        <h2>💃🏼 Fun projects</h2>
        {sideProjects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ProjectsSection>
    </Content>
  );
};

export default Projects;
