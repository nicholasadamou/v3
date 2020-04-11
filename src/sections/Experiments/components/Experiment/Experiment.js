import React from "react";

import "./index.scss";

const Experiment = (title, desc, link, emoji, label) => (
  <div className="experiment">
    <div className="top">
      <span role="img" aria-label={label}>
        {emoji}
      </span>
      <a
        href={link}
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="experiment-link"
      >
        {title}
      </a>
    </div>
    <p>{desc}</p>
  </div>
);

export default Experiment;
