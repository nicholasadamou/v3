import styled from "styled-components";

import image from "../../../../assets/images/avatar";

const Avatar = styled.div`
  position: relative;

  margin: -125px auto 0;

  width: 250px;
  height: 250px;

  border-radius: 50%;

  background-image: url(${image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @include until($iphone-7) {
    width: 200px;
    height: 200px;

    margin-top: -100px;
  }
`;

export default Avatar;
