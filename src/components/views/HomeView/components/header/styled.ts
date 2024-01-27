import styled from "styled-components";

export const BodyTitleHome = styled.div `
  position: absolute;
  top: 20vh;
  left: 10vw;
  display: flex;
  flex-flow: column;
  color: #0a0a0a;

  h3 {
    width: 50%;
    text-align: left;
    font-family: Monotype Corsiva;
    font-size: 10vw;
    padding: 0;
    margin: 0;
  }

  span {
    width: fit-content;
    font-family: Mistral;
    font-size: 3vw;
    background: white;
    border-radius: 10px;
    padding: 5px;
    text-align: left;
  }

  @media (max-width: 650px) {
      visibility: hidden;
  }
`