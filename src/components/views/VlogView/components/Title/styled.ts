import styled from "styled-components";

export const TitleBody = styled.div<{left: number}>`
  position: absolute;
  width: 100%;
  bottom: ${props => `${props.left}px`};  
  opacity: ${props => ``};
  border-radius: 10px;
  gap: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  
  span {
    font-family: "Roboto variant10", Tofu;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
  }
  
  @media (max-width: 550px) {
    height: 70px;

    img {
      width: 100px;
      height: 100px;
    }
    span {
      font-size: 50px;
    }
  }
  @media (min-width: 550px) {
    height: 120px;
  }
`