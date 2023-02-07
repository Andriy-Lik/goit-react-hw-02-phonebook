import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import initialContacts from '../Data/Contacts.json';

import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Message from '../Message';
import { Title, Span } from './App.styled';

class App extends Component {

  state = {
    contacts: initialContacts,
    filter: ''
  };

  addContact = data => {
    const { contacts } = this.state;

    if (
      contacts.some(({ name }) => name.toLowerCase() === data.name.toLowerCase())
    ) {Report.failure(`${data.name} is already in contacts`)}

    else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, 
          {
            id: nanoid(),
            name: data.name,
            number: data.number,
          }
        ],
      }));
    }
  };

  deleteContact = contactId => {
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
    const length = this.state.contacts.length;
   
    return (
      <>
        <Section title='Phonebook'>
          <Title><Span>P</Span>honebook</Title>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title='Contacts'>
          <Title>Contact<Span>s</Span></Title>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          {
            length > 0 ? 
            (<ContactList contacts={this.getVisibleContact()} onDelete={this.deleteContact} />) :
            (<Message text="PhoneBook is empty!!!" />)
          }
        </Section>
      </>
    );
  }
}

export default App;