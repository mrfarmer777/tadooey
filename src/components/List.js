import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

function List(props){
    
    const StyledList=styled.ul`
        background-color: lavender;
        border-radius: 5px;
        border: solid 3px grey;
    `
    
    return(
            <StyledList>
                <Todo content={"I'm a todo item"} completed/>
            </StyledList>
        
    )
}

export default List;