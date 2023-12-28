import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import Contacts from "./AddContacts";
import List from "./Clist";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const updateContactHandler = (updatedContact) => {
    const updatedContacts = contacts.map((c) =>
      c.id === updatedContact.id ? updatedContact : c
    );
    setContacts(updatedContacts);
  };

  const addContactHandler = (contact) => {
    const existingPhone = contacts.find((c) => c.phone === contact.phone);
    const existingEmail = contacts.find((c) => c.email === contact.email);

    if (existingPhone || existingEmail) {
      alert("Contact with the same phone number or email already exists!");
      return;
    }

    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Contacts addContactHandler={addContactHandler} contacts={contacts} />
      <List
        contacts={contacts}
        getContactId={removeContactHandler}
        updateContactHandler={updateContactHandler}
      />
    </div>
  );
}

export default App;
