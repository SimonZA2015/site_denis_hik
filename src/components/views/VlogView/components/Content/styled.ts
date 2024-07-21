import styled from "styled-components";

export const BodyContent = styled.div<{opacity: number, height: number, border: number}>`
  opacity: ${props => props.opacity};
  position: fixed;
  border-radius: ${props => `${props.border}px ${props.border}px 0 0`};
  bottom: 0;
  left: 0;
  right: 0;
  top: ${props => props.height}vh;
  background: white;
  pointer-events: none;
`

export const DeliverContent = styled.div<{opacity: number}>`
  opacity: ${props => props.opacity};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5px;
  margin-top: 10px;

  div {
    background: #e0e0e0;
    border-radius: 10px;
    height: 5px;
    width: 20vw;
  }
`