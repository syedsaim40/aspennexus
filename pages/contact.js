"use client";
import React, { useRef } from "react";
import { useState } from "react";
import "./contact.scss";
import "../src/app/globals.css";
import Link from "next/link";
import Header from "../src/app/Components/Header";
import Footer from "../src/app/Components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: `${countryCode} ${phone}`,
        interest,
        date,
        time,
        message,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setDate("");
      setTime("");
      setMessage("");
    } else {
      setStatus(`Error: ${result.error}`);
    }
  };

  return (
    <>
    <Header />
      <div className="container">
        <div className="section">
          <div className="contact">
            <div className="contactText">
              <h1>Interested?</h1>
              <h1>Let’s talk!</h1>
              <p>
                Just fill this form and we will contact you promptly to discuss
                your project. Hate forms? Drop us a message at{" "}
                <Link href="#">info@waves.com</Link> or{" "}
                <Link href="#">hello@waves.com</Link>
              </p>
            </div>
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
              <div className="numberInfo">
                <select
                  className="country_wrapper"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  style={{ marginRight: "10px" }}
                >
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+61">+61 (Australia)</option>
                </select>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="inquriy">
                <div className="interest">
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
                  </select>
                </div>
                <div
                  className="dateTime"
                  onClick={() =>
                    document.getElementById("dateInput").showPicker()
                  }
                >
                  <input
                    id="dateInput"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="dateTime"
                  onClick={() =>
                    document.getElementById("timeInput").showPicker()
                  }
                >
                  <input
                    id="timeInput"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              <textarea
                placeholder="Tell Us About Your Project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button className="btn" type="submit">
                Send Request →
              </button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
