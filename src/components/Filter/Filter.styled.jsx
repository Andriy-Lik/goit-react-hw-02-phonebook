import styled from "@emotion/styled";

export const FilterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
`;

export const FilterInput = styled.input`
    width: 200px;
    height: 30px;
    border: 2px solid grey;
    border-radius: 3px;

    &:hover,
    &:focus {
        border: 2px solid skyblue; 
    }
`;