import React from 'react';
import { IProject } from '../../routes/projects/projectData';
import { Link } from 'react-router-dom';
import './project-navigation.css';

interface IProjectNavigationProps {
  nextProject: Pick<IProject, 'slug' | 'title'>;
  previousProject: Pick<IProject, 'slug' | 'title'>;
}

const ProjectNavigation: React.FC<IProjectNavigationProps> = ({ nextProject, previousProject }) => (
  <nav className="project-navigation">
    <Link
      className="project-navigation__link"
      to={`/projects/${previousProject.slug}`}
    >
      <strong>Previous:</strong>
      &nbsp;
      {previousProject.title}
    </Link>
    <Link
      className="project-navigation__link"
      to={`/projects/${nextProject.slug}`}
    >
      <strong>Next:</strong>
      &nbsp;
      {nextProject.title}
    </Link>
  </nav>
);

export default ProjectNavigation;
