import React from "react";

import "./index.scss";

const Experience = (company, title, location, duration, description, image) => (
  <div className="experience">
    <img src={image} alt={company} className="experience-company-logo" />
    <div className="experience-meta">
      <span className="experience-title">{title}</span>
      <span className="experience-duration">{duration}</span>
      <span className="experience-location">{location}</span>
      <span className="experience-description">{description()}</span>
    </div>
  </div>
);

export default Experience;
