import React from "react";
import { Helmet } from "react-helmet";
import ProjectCard from "@/components/common/ui/ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Helmet>

      {/* Content */}
      <section className="projects border-top py-3 my-3">
        <div className="px-5">
          <p className="home-head h5">Portfolio</p>
          <h2 className="fw-bold">Recent Projects</h2>
        </div>

        <div className="container">
          <div className="row py-3 g-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
