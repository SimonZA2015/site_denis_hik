import styled from "styled-components";
import image from "./../../media/bgHome.jpg"
import imagePC from "./../../media/bgHomePC.jpg"

export const BodyHome = styled.div `
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${image});

  @media (min-width: 650px) {
      background-image: url(${imagePC});
  }

`