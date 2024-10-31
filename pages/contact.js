'use client'
import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [message, setMessage] = useState('');
  const [interest, setInterest] = useState(''); // New state for interest category
  const [date, setDate] = useState(''); // New state for date
  const [time, setTime] = useState(''); // New state for time
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone: `${countryCode} ${phone}`, interest, date, time, message }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setInterest(''); // Reset interest category
      setDate(''); // Reset date
      setTime(''); // Reset time
      setMessage('');
    } else {
      setStatus(`Error: ${result.error}`);
    }
  };

  return (
    <div className='contact_form'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            style={{ marginRight: '10px' }}
          >
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
            <option value="+61">+61 (Australia)</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
          >
            <option value="">Select Your Interest</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="General Inquiry">General Inquiry</option>
            {/* Add more interest categories as needed */}
          </select>
        </div>
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
