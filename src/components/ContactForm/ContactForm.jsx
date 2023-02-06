import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { nanoid } from "nanoid";
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };

    nameInpudId = nanoid();
    numberInpudId = nanoid();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value, });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // Reset
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormLabel htmlFor={this.nameInpudId}>Name</FormLabel>
                <FormInput
                    type="text"
                    name="name"
                    id={this.nameInpudId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <FormLabel htmlFor={this.numberInpudId}>Number</FormLabel>
                <FormInput
                    type="tel"
                    name="number"
                    id={this.numberInpudId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <FormButton type="submit">Add contact</FormButton>
            </Form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm;