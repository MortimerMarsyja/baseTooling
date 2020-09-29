import styled from "styled-components";
import {blueColor,greyColors} from './colorPalette';

export const StyledApp = styled.div`
    h1{
        font-size:32px;
        font-weight:700;
        color:${greyColors[700]};
    },
    h2{
        font-size:28px;
        font-weight:600;
        color:${greyColors[600]};
    },
    h3{
        font-size:24px;
        font-weight:500;
        color:${blueColor};
    },
    h4{
        font-size:20px;
        font-weight:400;
        color:${greyColors[700]};
    },
    p{
        font-size:18px;
        width:200px;
        line-height:28px;
    }
`;