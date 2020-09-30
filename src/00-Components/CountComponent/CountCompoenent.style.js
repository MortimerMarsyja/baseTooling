import styled from 'styled-components'

const StyledCount = styled.div`
    display:flex;
    height:30px;
    p{
        margin:0 1em;
    }
    button{
        width:22px;
        height:22px;
        background-color:red;
        line-height:9px;
        border:none;
    }
    &:active{
        outline:none;
    }
`

export default StyledCount;