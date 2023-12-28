import React, { useState } from "react";

const Cards = ({ contact, clickHandler, updateContactHandler }) => {
  const { id, name, email, phone } = contact;
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);

  const handleEmailClick = () => {
    window.location.href = `mailto:${editedEmail}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${editedPhone}`;
  };

  const handleDeleteClick = () => {
    clickHandler(id);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    const updatedContact = {
      ...contact,
      email: editedEmail,
      phone: editedPhone,
    };
    updateContactHandler(updatedContact);
    setIsEditing(false);
  };

  return (
    <div className="item">
      <img
        className="ui avatar image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/1733px-Google_Contacts_icon_%282022%29.svg.png"
        alt="user"
      />
      <div
        className="content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="header">{name}</div>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
            <input
              type="text"
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
            />
          </div>
        ) : (
          <div className="contact-info">
            <div>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button className="ui button green" onClick={handlePhoneClick}>
              Call
            </button>
            <button className="ui button blue" onClick={handleEmailClick}>
              Email
            </button>
          </div>
          <div>
            {isEditing ? (
              <button className="ui button" onClick={handleSaveClick}>
                Save
              </button>
            ) : (
              <button className="ui button" onClick={handleEditClick}>
                Edit
              </button>
            )}
            <button className="ui button red" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
