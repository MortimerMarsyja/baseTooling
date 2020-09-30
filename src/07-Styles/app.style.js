import styled from "styled-components";
import {blueColor,greyColors} from './colorPalette';

export const StyledApp = styled.div`
    margin:2rem 2rem;
    h1{
        font-size:2rem;
        font-weight:700;
        line-height: 2.28rem;
        color:${greyColors[700]};
    },
    h2{
        font-size:1.8rem;
        font-weight:600;
        color:${greyColors[600]};
    },
    h3{
        font-size:1.6rem;
        font-weight:500;
        color:${blueColor};
    },
    h4{
        font-size:1.4rem;
        font-weight:400;
        color:${greyColors[700]};
    },
    p{
        font-size:1.2rem;
        width:200px;
        line-height:1.64rem;
    }
`;