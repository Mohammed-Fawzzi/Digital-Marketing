import React from "react";

export default function ProjectCard({ image, title, category }) {
  return (
    <div className="col-md-6 project position-relative">
      <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
        <h5 className="fw-bold">{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-2">
          <p className="text-black-50 pt-3 fw-bold">{category}</p>
          <button className="btn btn-primary">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <img
        src={image}
        alt="project-image"
        className="object-fit-cover w-100 rounded-5"
        loading="lazy"
      />
    </div>
  );
}
