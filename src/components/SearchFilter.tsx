import React from 'react';
import styled from "styled-components";



export const SearchFilter = () => {
    return (
        <StyledForm id='SearchFilter'>
        <input/>
        <select form='SearchFilter'>
            <option >Column</option>
            <option >date</option>
            <option >title</option>
            <option >quantity</option>
            <option >distance</option>
        </select>
        <select form='SearchFilter'>
            <option >Parameters</option>
            <option >equals</option>
            <option >contains</option>
            <option >more</option>
            <option >less</option>
        </select>
        </StyledForm>
    )
}


const StyledForm = styled.form`
width: 200px;
height: 100px;
`
