import styled from 'styled-components'
import {blueColor,whiteColor} from '../../07-Styles/colorPalette';

const StyledCount = styled.div`
    display:flex;
    align-items:center;
    height:30px;
    width:86px;
    p{
        margin:0 1em;
    }
    button{
        width:22px;
        height:22px;
        background-color:${blueColor};
        color:${whiteColor};
        line-height:9px;
        border:none;
    }
    &:active{
        outline:none;
    }
`

export default StyledCount;