import React, { useState } from "react";

const Contacts = ({ addContactHandler, contacts }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const addContact = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) {
      alert("All fields are mandatory!");
      return;
    }

    if (
      contacts.some((existingContact) => existingContact.name === contact.name)
    ) {
      alert("Contact with the same name already exists!");
      return;
    }

    addContactHandler(contact);
    setContact({ name: "", email: "", phone: "" });
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={contact.phone}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Contacts;
