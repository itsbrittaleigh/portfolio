import React from 'react';
import { useParams } from 'react-router-dom';
import { clientProjects, sideProjects } from '../projects/projectData';
import NotFound from './NotFound';
import './project.css';

const Project = () => {
  const params = useParams();
  const { slug } = params;

  const allProjects = clientProjects.concat(sideProjects);
  const currentProject = allProjects.find(project => project.slug === slug);
  const isClientProject = !!clientProjects.find(project => project.slug === slug);

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
          <a
            className="project__link"
            href={currentProject.liveLink}
            rel="noreferrer"
            target="_blank"
          >
            View site &rarr;
          </a>
        </div>
        <div className="project__link-container">
          <a
            href={currentProject.githubLink}
            rel="noreferrer"
            target="_blank"
          >
            View code &rarr;
          </a>
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
                    <a href={website} rel="noreferrer" target="_blank">{name}</a>
                    &nbsp;—&nbsp;
                    {role}
                  </li>
                )
              }
            })}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Project;
