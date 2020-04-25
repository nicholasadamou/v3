import React from "react";

import { useCloudinary } from "../../utilities/utilities";

const Media = ({ url, alt, size }) => {
  return (
    <img
      src={useCloudinary(url, `w_${size},h_${size},q_auto,f_auto`)}
      alt={alt}
    />
  );
};

export default Media;
