import React from "react";
import { 
    ContactListUl, 
    ContactListItem, 
    ContactListText, 
    ContactListBtn 
} from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
    <ContactListUl>
        {contacts.map((contact) => (
            <ContactListItem key={contact.id} >
                <ContactListText>{contact.name}: {contact.number}</ContactListText>
                <ContactListBtn 
                    type="button" 
                    onClick={() => onDelete(contact.id)} 
                >Delete</ContactListBtn>
            </ContactListItem>
        ))}
    </ContactListUl>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;