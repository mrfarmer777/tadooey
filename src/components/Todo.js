import React from 'react';
import styled from 'styled-components';


const StyledItem=styled.li`
    color: ${props => props.completed ? "orange" : "purple"};
    font-weight:  bold;
`

function Todo(props){
    return(
       <StyledItem>{props.content}</StyledItem>
    )
}

export default Todo;