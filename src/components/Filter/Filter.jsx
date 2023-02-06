import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { FilterDiv, FilterLabel, FilterInput } from './Filter.styled';

function Filter({ value, onChange }) {
    const filterInputId = nanoid();
    return (
        <FilterDiv>
            <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
            <FilterInput 
                id={filterInputId} 
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
                value={value} 
                onChange={onChange} 
            />
        </FilterDiv>
    
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;