import styled from "styled-components";
import {displayPoints} from "../../modal/configs/displayPoints";

export const BodyHeader = styled.header`
    width: 100%;
    background-color: #282c34;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    .logoHeader {
        position: absolute;
        left: 5px;
        align-content: center;

        img {
            height: 130px;
            align-content: center;
        }
    }

    h4 {
        opacity: 0;
        transition: opacity 0.3s;
        
        &.title {
            opacity: 1;
        }
    }

    .menuHeader {
        visibility: hidden;
        position: absolute;
        right: 5px;
        align-content: center;
        cursor: pointer;
    }

    .menuHeaderPhone {
        visibility: visible;
        position: absolute;
        right: 5px;
        cursor: pointer;
        align-content: center;
    }

    @media (min-width: 650px) {
        .menuHeader {
            visibility: visible;
        }

        .menuHeaderPhone {
            visibility: hidden;
        }
    }

    @media ${displayPoints.phonePoints} {
        .logoHeader img {
            height: 89px !important;
        }
    }
`;