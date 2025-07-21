import React from 'react';
import { IProject } from '../../routes/projects/projectData';
import {
  ProjectLink,
  ProjectTitle,
  ProjectDescription
} from './Project.styled';

interface IProjectProps {
  project: Pick<IProject, 'title' | 'description' | 'slug'>;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const { title, description, slug } = project;

  return (
    <ProjectLink to={`/projects/${slug}`}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectLink>
  );
};

export default Project;
