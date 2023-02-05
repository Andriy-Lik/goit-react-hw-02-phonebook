import React, { Component } from "react";
import { nanoid } from 'nanoid';
import initialContacts from './Data/Contacts.json';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {

  state = {
    contacts: initialContacts,
    filter: ''
  };

  addContact = data => {
    const normalizedname = data.name.toLowerCase();
    this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedname) ?
    alert(`${data.name} is already in contacts`) :
    this.setState(prevState => ({
      contacts: [...prevState.contacts, 
        {
          id: nanoid(),
          name: data.name,
          number: data.number,
        }
      ],
    }));
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const visibleContact = this.getVisibleContact();
    return (
      <>
        <Section title='Phonebook'>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title='Contacts'>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;