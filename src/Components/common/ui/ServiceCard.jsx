import React from "react";

export default function ServiceCard({ icon, title, vacancies }) {
  return (
    <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
      <div className="p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3">
        <i className={`${icon} fs-4`}></i>
      </div>
      <h4 className="fw-bold py-4">{title}</h4>
      <p className="text-body-tertiary fw-bold">{vacancies}</p>
    </div>
  );
}
