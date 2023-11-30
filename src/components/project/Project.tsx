import React from 'react';
import './project.css';
import { IProject } from '../../routes/projects/projectData';

interface IProjectProps {
  project: Pick<IProject, 'title' | 'description' | 'githubLink'>;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const { title, description, githubLink } = project;

  return (
    <a className="project" href={githubLink} rel="noreferrer" target="_blank">
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
    </a>
  );
};

export default Project;
