import React from 'react';
import StyledCount from './CountCompoenent.style';

const CountComponent = ({value,addFunction,decreaseFunction}) => {
    return(
        <StyledCount>
            <button onClick={decreaseFunction}>-</button>
                <p>{value}</p>
            <button onClick={addFunction}>+</button>
        </StyledCount>
    )
}

export default CountComponent;