import styled from "styled-components";

export const BannerImageBody = styled.div<{img0: boolean}>`
  height: calc(100vh - 116px);
  position: relative;
  
  img {
    transition: all 0.2s;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .img0 {
      opacity: ${({img0}) => img0 ? 1 : 0 };
  }
  .img1 {
      opacity: ${({img0}) => !img0 ? 1 : 0 };
  }
`