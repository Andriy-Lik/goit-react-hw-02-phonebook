import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5px;
    width: 400px;
    margin-bottom: 30px;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
`;

export const FormInput = styled.input`
    width: 300px;
    height: 30px;
    padding: 0;
    border: 2px solid grey;
    border-radius: 3px;

    &:hover,
    &:focus {
        border: 2px solid skyblue; 
    }
`;

export const FormButton = styled.button`
    width: 120px;
    height: 30px;
    margin-left: auto;
    padding: 0;
    background-color: #3f51b5;
    color: white;
    border: 1px solid grey;
    border-radius: 3px;

    &:hover,
    &:focus {
        background-color: #303f9f;
        scale: 1.1;
    }
`;