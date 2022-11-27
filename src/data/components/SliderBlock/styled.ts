import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: content-box;
  position: absolute;
  top: 113vh;
  left: 0;
  display: flex;
  justify-content: inherit;
  align-items: inherit;
  flex-direction: column;

  .item {
    height: calc(90vh / 3);
    border-radius: 10px;
    position: relative;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;

    .textBlock {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 10px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 100) 100%);
      left: 0;
      top: 0;

      .buttons {
        position: absolute;
        left: 10px;
        bottom: 5px;
      }

      .div1 {
        text-align: right;
      }
      
      span {
        color: white;
      }

      h4 {
        color: white;
        position: center;
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }
`;