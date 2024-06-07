import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      phone,
      query,
    };

    emailjs.send('service_s23zrnv', 'template_7ttirzl', templateParams, '_rU1sVPlMlowqWUEE')
      .then(response => {
        alert('Form submitted successfully!');
      })
      .catch(error => {
        alert('Failed to send email. Error: ' + JSON.stringify(error));
      });
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <label htmlFor="query">Your Query:</label>
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
