import React, { useEffect, useState } from "react";
import { Project } from "../../types/Projects";
import projectsData from "../../data/projects.json";
import "./Projects.scss";

const Projects: React.FC = () => {
    const [isScrollable, setIsScrollable] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      const container = document.querySelector('.projects-container');
      if (container) {
        setIsScrollable(container.scrollWidth > container.clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className={`projects-container ${isScrollable ? '' : 'no-scroll'}`}>
        {projectsData.map((project: Project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`${project.name}`}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span className="technology-tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink !== "no" && project.liveLink !== "NoLiveLink" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
                {project.gitBackendCode && (
                  <a
                    href={project.gitBackendCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Backend Code
                  </a>
                )}
                {project.gitFrontedCode && (
                  <a
                    href={project.gitFrontedCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Frontend Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
