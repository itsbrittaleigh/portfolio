import React from 'react';
import { useParams } from 'react-router-dom';
import { clientProjects, sideProjects } from '../projects/projectData';
import NotFound from './NotFound';
import './project.css';
import ProjectNavigation from '../../components/project-navigation/ProjectNavigation';
import ScrollToTop from '../../components/scroll-to-top/ScrollToTop';
import GradientLink from '../../components/gradient-link/GradientLink';

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
    <div className="content">
      <header className="project__header">
        <h1 className="project__headline">{currentProject.title}</h1>
        <p><i>{isClientProject ? 'Client project' : 'Fun project'}</i></p>
      </header>

      <section className="section">
        <p>{currentProject.overview}</p>
        <div className="project__link-container">
          <GradientLink
            className="project__link"
            href={currentProject.liveLink}
            newTab
            text="View site"
          />
        </div>
        <div className="project__link-container">
          <GradientLink
            className="project__link"
            href={currentProject.githubLink}
            newTab
            text="View code"
          />
        </div>
      </section>

      {!!currentProject.role && (
        <section className="section">
          <h2><span aria-hidden>🙋🏼‍♀️</span> My Role</h2>
          <p>{currentProject.role}</p>
        </section>
      )}

      {currentProject.technologies.length > 0 && (
        <section className="section">
          <h2><span aria-hidden>🧪</span> Technologies Used</h2>
          <ul>
            {currentProject.technologies.map((technology, idx) => (
              <li key={idx}>{technology}</li>
            ))}
          </ul>
        </section>
      )}

      {currentProject.acknowledgements.length > 0 && (
        <section className="section">
          <h2>🤝 Acknowledgements</h2>
          <ul>
            {currentProject.acknowledgements.map((acknowledgement) => {
              const { name, website, role } = acknowledgement;
              if (!!acknowledgement.website) {
                return (
                  <li>
                    <GradientLink
                      className="project__link"
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
                  <li>{name} — {role}</li>
                )
              }
            })}
          </ul>
        </section>
      )}

      <ProjectNavigation
        nextProject={allProjects[nextProjectIndex]}
        previousProject={allProjects[previousProjectIndex]}
      />
      <ScrollToTop />
    </div>
  );
};

export default Project;
