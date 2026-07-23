import React from "react";

export default function BlogCard({ image, date, category, title, isLast }) {
  return (
    <div className={`row border-top ${isLast ? "border-bottom" : ""} py-5`}>
      <div className="col-md-3">
        <img
          src={image}
          alt="blog-image"
          className="object-fit-cover w-100 rounded-4"
          loading="lazy"
        />
      </div>

      <div className="col-md-9">
        <div className="d-flex">
          <span className="text-black-50 fw-bold pe-3">Posted</span>
          <p>{date}</p>
          <span className="text-black-50 fw-bold ps-3"> - </span>
          <span className="text-black-50 ps-1">By</span>
          <span className="text-black-50 fw-bold ps-1"> - </span>
          <h5 className="fw-bold home-head ps-3">{category}</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h1 fw-bold">{title}</span>
          <button className="btn btn-primary p-3">
            <i className="fa-solid fa-arrow-right fs-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
