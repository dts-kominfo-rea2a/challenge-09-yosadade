// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="contact-item">
      <div>
        <img src={data.photo} alt="img" />
      </div>
      <div className="contact-item__title">
        <h1>{data.name}</h1>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
      <div />
    </div>
  );
};

export default Contact;
