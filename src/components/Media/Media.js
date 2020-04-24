import React from "react";

import { useWeserv } from "../../utilities/utilities";

const Media = ({ url, alt, size }) => {
  return (
    <img src={useWeserv(url, size)} alt={alt} width={size} height={size} />
  );
};

export default Media;
