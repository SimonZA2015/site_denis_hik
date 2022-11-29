import styled from "styled-components";

export const BodyPopout = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 220vh;
  background: rgba(0 , 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .panel {
    position: fixed;
    bottom: 30vh;
    width: 60vw;
    height: 50vh;
    background: white;
    border-radius: 20px;
    
    .item {
      width: calc(100% - 20px);
      height: 30%;
      border-radius: 10px;
      margin: 10px;
      position: relative;
      background-size: contain;
      background-origin: center;
      background-repeat: no-repeat;
      
      .item-black {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(0 , 0, 0, 0.3);
      }
      
      .item-title {
        //background: white;
        width: 70%;
        color: white;
        position: absolute;
        right: 0;
      }
      .item-role {
        //background: white;
        width: 70%;
        color: white;
        position: absolute;
        right: 0;
        top: 20px;
        font-size: 9px;
        
        @media (max-width: 650px) {
          top: unset;
          bottom: 10px;
          left: 10px;
          width: 40%;
          right: unset;
        }
      }
      .item-date {
        background: white;
        width: 35%;
        color: black;
        position: absolute;
        right: 10px;
        bottom: 10px;
        border-radius: 10px;
        font-size: 9px;
      }

      @media (max-width: 650px) {
        height: 20%;
      }
    }
    
    @media (max-width: 650px) {
      width: 100vw;
      height: 70vh;
      bottom: 0;
      left: 0;
      border-radius: 20px 20px 0 0;
    }
  }
  //z-index: 1;
`;