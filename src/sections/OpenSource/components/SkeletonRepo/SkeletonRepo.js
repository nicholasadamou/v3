import React from "react";

import { SkeletonText } from "carbon-components-react";

import CircularProgress from "@material-ui/core/CircularProgress";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Repository from "../../../../sass/components/Repository";

const SkeletonRepo = (id) => (
  <Repository key={id}>
    <div>
      <span aria-label="title">
        <CircularProgress />
      </span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        target="_blank"
        aria-hidden="true"
        aria-label={`github stars`}
        title="star"
        rel="noopener noreferrer"
      >
        <span role="img" aria-label="star">
          <FontAwesomeIcon icon={["fas", "star"]} />
          <>
            {" "}
            <CircularProgress />
          </>
        </span>
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        target="_blank"
        aria-hidden="true"
        aria-label={`fork on github`}
        title="fork"
        rel="noopener noreferrer"
      >
        <span role="img" aria-label="branch">
          <FontAwesomeIcon icon={["fas", "code-branch"]} />
          <>
            {" "}
            <CircularProgress />
          </>
        </span>
      </a>
    </div>
    <div>
      <SkeletonText heading={false} lineCount={2} paragraph width="100%" />
    </div>
  </Repository>
);

export default SkeletonRepo;
