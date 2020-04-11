import React from "react";

import "./index.scss";

const Awards = (image, title, content) => (
  <div className="award-listing">
    <img src={image} alt={title} className="school-logo" />
    <div className="awards-meta">
      <span className="award-listing-title">{title} Awards</span>
      <span className="awards-content">{content()}</span>
    </div>
  </div>
);

export default Awards;
