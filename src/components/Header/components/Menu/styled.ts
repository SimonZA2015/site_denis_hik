import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const BodyPopoutMenu = styled.div `
  width: 100vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  right: 0;
  top: 0;

  .body {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 20vw;
    padding: 5px;
    background-color: #f1f1f1;
    border-radius: 10px;
    position: fixed;
    right: 10px;
    top: 10px;

    .bodyImagesUrls {
      height: 30px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-around;

      img {
        cursor: pointer;
      }
    }
  }
  
  .body h4 {
    color: black;
    text-decoration: none;
  }
  .body h4:hover {
    text-decoration: underline;
  }
  
  
  @media (min-width: 650px) {
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 48%, rgba(0,0,0,0.7) 100%);
  }

  @media (max-width: 650px) {
    .body {
      top: unset;
      right: unset;
      left: 0;
      bottom: 0;
      width: calc(100vw - 10px);
      border-radius: 10px 10px 0 0;
      height: 50px;
      visibility: visible;
    }
  }
`
export const ButtonLink = styled(NavLink)`
  text-decoration: none;
  background: #dad9d9;
  border-radius: 20px;
  margin-bottom: 5px;
  height: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;

  .active {
    text-decoration: underline;
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
  }
`