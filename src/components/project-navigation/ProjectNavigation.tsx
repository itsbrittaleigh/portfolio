import React from 'react';
import { IProject } from '../../routes/projects/projectData';
import { Link } from 'react-router-dom';
import './project-navigation.css';
import GradientLink from '../gradient-link/GradientLink';

interface IProjectNavigationProps {
  nextProject: Pick<IProject, 'slug' | 'title'>;
  previousProject: Pick<IProject, 'slug' | 'title'>;
}

const ProjectNavigation: React.FC<IProjectNavigationProps> = ({ nextProject, previousProject }) => (
  <nav className="project-navigation">
    <GradientLink
      className="project-navigation__link"
      href={`/projects/${previousProject.slug}`}
      isRRLink
      text={
        <>
          <strong>Previous:</strong> {previousProject.title}
        </>
      }
    />
    <GradientLink
      className="project-navigation__link project-navigation__link--right"
      href={`/projects/${nextProject.slug}`}
      isRRLink
      text={
        <>
          <strong>Next:</strong> {nextProject.title}
        </>
      }
    />
  </nav>
);

export default ProjectNavigation;
