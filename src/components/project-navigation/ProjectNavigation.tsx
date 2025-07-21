import React from 'react';
import { IProject } from '../../routes/projects/projectData';
import GradientLink from '../gradient-link/GradientLink';
import {
  ProjectNavigationWrapper,
  ProjectNavigationLink
} from './ProjectNavigation.styled';

interface IProjectNavigationProps {
  nextProject: Pick<IProject, 'slug' | 'title'>;
  previousProject: Pick<IProject, 'slug' | 'title'>;
}

const ProjectNavigation: React.FC<IProjectNavigationProps> = ({ nextProject, previousProject }) => (
  <ProjectNavigationWrapper>
    <ProjectNavigationLink>
      <GradientLink
        href={`/projects/${previousProject.slug}`}
        isRRLink
        text={
          <>
            <strong>Previous:</strong> {previousProject.title}
          </>
        }
      />
    </ProjectNavigationLink>
    <ProjectNavigationLink>
      <GradientLink
        href={`/projects/${nextProject.slug}`}
        isRRLink
        text={
          <>
            <strong>Next:</strong> {nextProject.title}
          </>
        }
      />
    </ProjectNavigationLink>
  </ProjectNavigationWrapper>
);

export default ProjectNavigation;
