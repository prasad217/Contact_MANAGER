import React, { useState } from "react";
import Cards from "./Ccards";

const Clist = ({ contacts, getContactId, updateContactHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
    );
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="search-bar">
        <div className="search-box">
          <i className="search-icon fas fa-search"></i>
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>
      <div className="ui celled List">
        {filteredContacts.map((contact) => (
          <Cards
            key={contact.id}
            contact={contact}
            clickHandler={getContactId}
            updateContactHandler={updateContactHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Clist;
