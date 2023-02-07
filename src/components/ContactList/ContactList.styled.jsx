import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const ContactListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 45px;
    border: 2px solid grey;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 0 10px;

    &:last-child {
        margin-bottom: 0;
    }
    
`;

export const ContactListText = styled.p`
    margin: 0;
`;

export const ContactListBtn = styled.button`
    height: 30px;
    width: 80px;
    padding: 0;
    background-color: #3f51b5;
    color: white;
    border: 1px solid grey;
    border-radius: 3px;

    &:hover,
    &: focus {
        background-color: #303f9f;
        scale: 1.1;
    }
`;
    