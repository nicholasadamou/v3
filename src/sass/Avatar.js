import styled from "styled-components";

import { useCloudinary } from "../utilities/utilities";

const Avatar = styled.div`
  position: relative;

  margin: -125px auto 0;

  width: 250px;
  height: 250px;

  border-radius: 50%;

  background-image: url(${useCloudinary(
    "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/avatars/nicholas.jpg"
  )});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default Avatar;
