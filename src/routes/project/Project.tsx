import React from 'react';
import { useParams } from 'react-router-dom';
import { clientProjects, sideProjects } from '../projects/projectData';
import NotFound from './NotFound';
import ProjectNavigation from '../../components/project-navigation/ProjectNavigation';
import ScrollToTop from '../../components/scroll-to-top/ScrollToTop';
import GradientLink from '../../components/gradient-link/GradientLink';
import {
  Content,
  Section,
  ProjectHeader,
  ProjectHeadline,
  ProjectLinkContainer
} from './Project.styled';

const Project = () => {
  const params = useParams();
  const { slug } = params;

  const allProjects = clientProjects.concat(sideProjects);
  const currentProject = allProjects.find(project => project.slug === slug);
  const isClientProject = !!clientProjects.find(project => project.slug === slug);
  
  const currentProjectIndex = allProjects.findIndex(project => project.slug === slug);
  const nextProjectIndex = currentProjectIndex + 1 >= allProjects.length ? 0 : currentProjectIndex + 1;
  const previousProjectIndex = currentProjectIndex - 1 <= 0 ? allProjects.length - 1 : currentProjectIndex - 1;

  if (!currentProject) return <NotFound />;

  return (
    <Content>
      <ProjectHeader>
        <ProjectHeadline>{currentProject.title}</ProjectHeadline>
        <p><i>{isClientProject ? 'Client project' : 'Fun project'}</i></p>
      </ProjectHeader>

      <Section>
        <p>{currentProject.overview}</p>
        <ProjectLinkContainer>
          <GradientLink
            href={currentProject.liveLink}
            newTab
            text="View site →"
          />
        </ProjectLinkContainer>
        <ProjectLinkContainer>
          <GradientLink
            href={currentProject.githubLink}
            newTab
            text="View code →"
          />
        </ProjectLinkContainer>
      </Section>

      {!!currentProject.role && (
        <Section>
          <h2><span aria-hidden>🙋🏼‍♀️</span> My Role</h2>
          <p>{currentProject.role}</p>
        </Section>
      )}

      {currentProject.technologies.length > 0 && (
        <Section>
          <h2><span aria-hidden>🧪</span> Technologies Used</h2>
          <ul>
            {currentProject.technologies.map((technology, idx) => (
              <li key={idx}>{technology}</li>
            ))}
          </ul>
        </Section>
      )}

      {currentProject.acknowledgements.length > 0 && (
        <Section>
          <h2>🤝 Acknowledgements</h2>
          <ul>
            {currentProject.acknowledgements.map((acknowledgement) => {
              const { name, website, role } = acknowledgement;
              if (!!acknowledgement.website) {
                return (
                  <li key={name}>
                    <GradientLink
                      href={website!}
                      newTab
                      text={name}
                    />
                    &nbsp;—&nbsp;
                    {role}
                  </li>
                )
              } else {
                return (
                  <li key={name}>{name} — {role}</li>
                )
              }
            })}
          </ul>
        </Section>
      )}

      <ProjectNavigation
        nextProject={allProjects[nextProjectIndex]}
        previousProject={allProjects[previousProjectIndex]}
      />
      <ScrollToTop />
    </Content>
  );
};

export default Project;
