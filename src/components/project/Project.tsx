import React from 'react';
import './project.css';
import { IProject } from '../../routes/projects/projectData';
import { Link } from 'react-router-dom';

interface IProjectProps {
  project: Pick<IProject, 'title' | 'description' | 'slug'>;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const { title, description, slug } = project;

  return (
    <Link className="project" to={`/projects/${slug}`}>
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
    </Link>
  );
};

export default Project;
