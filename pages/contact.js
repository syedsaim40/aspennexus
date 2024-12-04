"use client";
import React, { useRef } from "react";
import { useState } from "react";
import "./contact.scss";
import "../src/app/globals.css";
import Link from "next/link";
import Header from "../src/app/Components/Header";
import Footer from "../src/app/Components/Footer";

const countryPhoneLengths = {
  "+93": 9,    // Afghanistan
  "+355": 9,   // Albania
  "+213": 9,   // Algeria
  "+1-684": 7, // American Samoa
  "+376": 7,   // Andorra
  "+244": 9,   // Angola
  "+1-264": 7, // Anguilla
  "+672": 5,   // Antarctica
  "+1-268": 7, // Antigua and Barbuda
  "+54": 10,   // Argentina
  "+374": 8,   // Armenia
  "+297": 7,   // Aruba
  "+61": 9,    // Australia
  "+43": 10,   // Austria
  "+994": 9,   // Azerbaijan
  "+1-242": 7, // Bahamas
  "+973": 8,   // Bahrain
  "+880": 10,  // Bangladesh
  "+1-246": 7, // Barbados
  "+375": 9,   // Belarus
  "+32": 9,    // Belgium
  "+501": 8,   // Belize
  "+229": 8,   // Benin
  "+1-441": 7, // Bermuda
  "+975": 8,   // Bhutan
  "+591": 8,   // Bolivia
  "+387": 8,   // Bosnia and Herzegovina
  "+267": 8,   // Botswana
  "+55": 11,   // Brazil
  "+246": 7,   // British Indian Ocean Territory
  "+1-284": 7, // British Virgin Islands
  "+673": 7,   // Brunei
  "+359": 9,   // Bulgaria
  "+226": 8,   // Burkina Faso
  "+257": 8,   // Burundi
  "+855": 9,   // Cambodia
  "+237": 9,   // Cameroon
  "+1": 10,    // Canada
  "+238": 7,   // Cape Verde
  "+1-345": 7, // Cayman Islands
  "+236": 9,   // Central African Republic
  "+235": 9,   // Chad
  "+56": 9,    // Chile
  "+86": 11,   // China
  "+61": 9,    // Christmas Island
  "+61": 9,    // Cocos Islands
  "+57": 10,   // Colombia
  "+269": 9,   // Comoros
  "+682": 5,   // Cook Islands
  "+506": 8,   // Costa Rica
  "+385": 9,   // Croatia
  "+53": 8,    // Cuba
  "+599": 9,   // Curacao
  "+357": 9,   // Cyprus
  "+420": 9,   // Czech Republic
  "+243": 9,   // Democratic Republic of the Congo
  "+45": 8,    // Denmark
  "+253": 8,   // Djibouti
  "+1-767": 7, // Dominica
  "+1-809": 7, // Dominican Republic
  "+593": 9,   // Ecuador
  "+20": 10,   // Egypt
  "+503": 8,   // El Salvador
  "+240": 8,   // Equatorial Guinea
  "+291": 7,   // Eritrea
  "+372": 8,   // Estonia
  "+251": 9,   // Ethiopia
  "+500": 6,   // Falkland Islands
  "+298": 8,   // Faroe Islands
  "+679": 7,   // Fiji
  "+358": 9,   // Finland
  "+33": 9,    // France
  "+689": 8,   // French Polynesia
  "+241": 8,   // Gabon
  "+220": 8,   // Gambia
  "+995": 9,   // Georgia
  "+49": 11,   // Germany
  "+233": 9,   // Ghana
  "+350": 8,   // Gibraltar
  "+30": 10,   // Greece
  "+299": 8,   // Greenland
  "+1-473": 7, // Grenada
  "+1-671": 7, // Guam
  "+502": 8,   // Guatemala
  "+44-1481": 7, // Guernsey
  "+224": 8,   // Guinea
  "+245": 8,   // Guinea-Bissau
  "+592": 8,   // Guyana
  "+509": 8,   // Haiti
  "+504": 8,   // Honduras
  "+852": 8,   // Hong Kong
  "+36": 9,    // Hungary
  "+354": 7,   // Iceland
  "+91": 10,   // India
  "+62": 10,   // Indonesia
  "+98": 10,   // Iran
  "+964": 10,  // Iraq
  "+353": 9,   // Ireland
  "+44-1624": 7, // Isle of Man
  "+972": 9,   // Israel
  "+39": 10,   // Italy
  "+1-876": 7, // Jamaica
  "+81": 10,   // Japan
  "+44": 10,   // Jersey
  "+962": 9,   // Jordan
  "+7": 10,    // Kazakhstan
  "+254": 9,   // Kenya
  "+686": 7,   // Kiribati
  "+383": 8,   // Kosovo
  "+965": 8,   // Kuwait
  "+996": 9,   // Kyrgyzstan
  "+856": 9,   // Laos
  "+371": 8,   // Latvia
  "+961": 9,   // Lebanon
  "+266": 8,   // Lesotho
  "+231": 8,   // Liberia
  "+218": 9,   // Libya
  "+423": 7,   // Liechtenstein
  "+370": 8,   // Lithuania
  "+352": 8,   // Luxembourg
  "+853": 8,   // Macau
  "+389": 8,   // Macedonia
  "+261": 9,   // Madagascar
  "+265": 8,   // Malawi
  "+60": 9,    // Malaysia
  "+960": 7,   // Maldives
  "+223": 8,   // Mali
  "+356": 8,   // Malta
  "+692": 7,   // Marshall Islands
  "+222": 8,   // Mauritania
  "+230": 8,   // Mauritius
  "+262": 8,   // Mayotte
  "+52": 10,   // Mexico
  "+691": 7,   // Micronesia
  "+373": 8,   // Moldova
  "+377": 8,   // Monaco
  "+976": 8,   // Mongolia
  "+382": 8,   // Montenegro
  "+1-664": 7, // Montserrat
  "+212": 9,   // Morocco
  "+258": 9,   // Mozambique
  "+95": 9,    // Myanmar
  "+264": 8,   // Namibia
  "+674": 7,   // Nauru
  "+977": 9,   // Nepal
  "+31": 9,    // Netherlands
  "+687": 7,   // New Caledonia
  "+64": 9,    // New Zealand
  "+505": 8,   // Nicaragua
  "+227": 8,   // Niger
  "+234": 10,  // Nigeria
  "+683": 7,   // Niue
  "+850": 9,   // North Korea
  "+1-670": 7, // Northern Mariana Islands
  "+47": 8,    // Norway
  "+968": 9,   // Oman
  "+92": 10,   // Pakistan
  "+680": 7,   // Palau
  "+970": 9,   // Palestine
  "+507": 8,   // Panama
  "+675": 8,   // Papua New Guinea
  "+595": 9,   // Paraguay
  "+51": 9,    // Peru
  "+63": 10,   // Philippines
  "+48": 9,    // Poland
  "+351": 9,   // Portugal
  "+1-787": 7, // Puerto Rico
  "+974": 9,   // Qatar
  "+242": 9,   // Republic of the Congo
  "+40": 10,   // Romania
  "+7": 10,    // Russia
  "+250": 9,   // Rwanda
  "+290": 7,   // Saint Helena
  "+1-869": 7, // Saint Kitts and Nevis
  "+1-758": 7, // Saint Lucia
  "+1-784": 7, // Saint Vincent and the Grenadines
  "+684": 7,   // Samoa
  "+378": 8,   // San Marino
  "+239": 8,   // Sao Tome and Principe
  "+966": 9,   // Saudi Arabia
  "+221": 8,   // Senegal
  "+381": 9,   // Serbia
  "+248": 7,   // Seychelles
  "+232": 8,   // Sierra Leone
  "+65": 8,    // Singapore
  "+421": 9,   // Slovakia
  "+386": 8,   // Slovenia
  "+677": 7,   // Solomon Islands
  "+252": 8,   // Somalia
  "+27": 10,   // South Africa
  "+34": 9,    // Spain
  "+94": 9,    // Sri Lanka
  "+249": 9,   // Sudan
  "+597": 8,   // Suriname
  "+268": 8,   // Swaziland
  "+46": 9,    // Sweden
  "+41": 9,    // Switzerland
  "+963": 9,   // Syria
  "+886": 9,   // Taiwan
  "+992": 9,   // Tajikistan
  "+255": 9,   // Tanzania
  "+66": 9,    // Thailand
  "+228": 8,   // Togo
  "+690": 7,   // Tokelau
  "+676": 7,   // Tonga
  "+1-868": 7, // Trinidad and Tobago
  "+216": 8,   // Tunisia
  "+90": 10,   // Turkey
  "+993": 9,   // Turkmenistan
  "+1-649": 7, // Turks and Caicos Islands
  "+688": 7,   // Tuvalu
  "+256": 9,   // Uganda
  "+380": 9,   // Ukraine
  "+971": 9,   // United Arab Emirates
  "+44": 10,   // United Kingdom
  "+1": 10,    // United States
  "+598": 9,   // Uruguay
  "+998": 9,   // Uzbekistan
  "+678": 7,   // Vanuatu
  "+379": 8,   // Vatican City
  "+58": 10,   // Venezuela
  "+84": 9,    // Vietnam
  "+1-340": 7, // Virgin Islands
  "+967": 9,   // Yemen
  "+260": 9,   // Zambia
  "+263": 9,   // Zimbabwe
};


const countries = [
  { code: "+93", name: "Afghanistan" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1-684", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+1-264", name: "Anguilla" },
  { code: "+672", name: "Antarctica" },
  { code: "+1-268", name: "Antigua and Barbuda" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+297", name: "Aruba" },
  { code: "+61", name: "Australia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+1-242", name: "Bahamas" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+1-246", name: "Barbados" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+501", name: "Belize" },
  { code: "+229", name: "Benin" },
  { code: "+1-441", name: "Bermuda" },
  { code: "+975", name: "Bhutan" },
  { code: "+591", name: "Bolivia" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+267", name: "Botswana" },
  { code: "+55", name: "Brazil" },
  { code: "+246", name: "British Indian Ocean Territory" },
  { code: "+1-284", name: "British Virgin Islands" },
  { code: "+673", name: "Brunei" },
  { code: "+359", name: "Bulgaria" },
  { code: "+226", name: "Burkina Faso" },
  { code: "+257", name: "Burundi" },
  { code: "+855", name: "Cambodia" },
  { code: "+237", name: "Cameroon" },
  { code: "+1", name: "Canada" },
  { code: "+238", name: "Cape Verde" },
  { code: "+1-345", name: "Cayman Islands" },
  { code: "+236", name: "Central African Republic" },
  { code: "+235", name: "Chad" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+61", name: "Christmas Island" },
  { code: "+61", name: "Cocos Islands" },
  { code: "+57", name: "Colombia" },
  { code: "+269", name: "Comoros" },
  { code: "+682", name: "Cook Islands" },
  { code: "+506", name: "Costa Rica" },
  { code: "+385", name: "Croatia" },
  { code: "+53", name: "Cuba" },
  { code: "+599", name: "Curacao" },
  { code: "+357", name: "Cyprus" },
  { code: "+420", name: "Czech Republic" },
  { code: "+243", name: "Democratic Republic of the Congo" },
  { code: "+45", name: "Denmark" },
  { code: "+253", name: "Djibouti" },
  { code: "+1-767", name: "Dominica" },
  { code: "+1-809", name: "Dominican Republic" },
  { code: "+593", name: "Ecuador" },
  { code: "+20", name: "Egypt" },
  { code: "+503", name: "El Salvador" },
  { code: "+240", name: "Equatorial Guinea" },
  { code: "+291", name: "Eritrea" },
  { code: "+372", name: "Estonia" },
  { code: "+251", name: "Ethiopia" },
  { code: "+500", name: "Falkland Islands" },
  { code: "+298", name: "Faroe Islands" },
  { code: "+679", name: "Fiji" },
  { code: "+358", name: "Finland" },
  { code: "+33", name: "France" },
  { code: "+689", name: "French Polynesia" },
  { code: "+241", name: "Gabon" },
  { code: "+220", name: "Gambia" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+233", name: "Ghana" },
  { code: "+350", name: "Gibraltar" },
  { code: "+30", name: "Greece" },
  { code: "+299", name: "Greenland" },
  { code: "+1-473", name: "Grenada" },
  { code: "+1-671", name: "Guam" },
  { code: "+502", name: "Guatemala" },
  { code: "+44-1481", name: "Guernsey" },
  { code: "+224", name: "Guinea" },
  { code: "+245", name: "Guinea-Bissau" },
  { code: "+592", name: "Guyana" },
  { code: "+509", name: "Haiti" },
  { code: "+504", name: "Honduras" },
  { code: "+852", name: "Hong Kong" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" },
  { code: "+62", name: "Indonesia" },
  { code: "+98", name: "Iran" },
  { code: "+964", name: "Iraq" },
  { code: "+353", name: "Ireland" },
  { code: "+44-1624", name: "Isle of Man" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+1-876", name: "Jamaica" },
  { code: "+81", name: "Japan" },
  { code: "+44", name: "Jersey" },
  { code: "+962", name: "Jordan" },
  { code: "+7", name: "Kazakhstan" },
  { code: "+254", name: "Kenya" },
  { code: "+686", name: "Kiribati" },
  { code: "+383", name: "Kosovo" },
  { code: "+965", name: "Kuwait" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+856", name: "Laos" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+266", name: "Lesotho" },
  { code: "+231", name: "Liberia" },
  { code: "+218", name: "Libya" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+853", name: "Macau" },
  { code: "+389", name: "Macedonia" },
  { code: "+261", name: "Madagascar" },
  { code: "+265", name: "Malawi" },
  { code: "+60", name: "Malaysia" },
  { code: "+960", name: "Maldives" },
  { code: "+223", name: "Mali" },
  { code: "+356", name: "Malta" },
  { code: "+692", name: "Marshall Islands" },
  { code: "+222", name: "Mauritania" },
  { code: "+230", name: "Mauritius" },
  { code: "+262", name: "Mayotte" },
  { code: "+52", name: "Mexico" },
  { code: "+691", name: "Micronesia" },
  { code: "+373", name: "Moldova" },
  { code: "+377", name: "Monaco" },
  { code: "+976", name: "Mongolia" },
  { code: "+382", name: "Montenegro" },
  { code: "+1-664", name: "Montserrat" },
  { code: "+212", name: "Morocco" },
  { code: "+258", name: "Mozambique" },
  { code: "+95", name: "Myanmar" },
  { code: "+264", name: "Namibia" },
  { code: "+674", name: "Nauru" },
  { code: "+977", name: "Nepal" },
  { code: "+31", name: "Netherlands" },
  { code: "+687", name: "New Caledonia" },
  { code: "+64", name: "New Zealand" },
  { code: "+505", name: "Nicaragua" },
  { code: "+227", name: "Niger" },
  { code: "+234", name: "Nigeria" },
  { code: "+683", name: "Niue" },
  { code: "+850", name: "North Korea" },
  { code: "+1-670", name: "Northern Mariana Islands" },
  { code: "+47", name: "Norway" },
  { code: "+968", name: "Oman" },
  { code: "+92", name: "Pakistan" },
  { code: "+680", name: "Palau" },
  { code: "+970", name: "Palestine" },
  { code: "+507", name: "Panama" },
  { code: "+675", name: "Papua New Guinea" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Peru" },
  { code: "+63", name: "Philippines" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+1-787", name: "Puerto Rico" },
  { code: "+974", name: "Qatar" },
  { code: "+242", name: "Republic of the Congo" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russia" },
  { code: "+250", name: "Rwanda" },
  { code: "+590", name: "Saint Barthelemy" },
  { code: "+290", name: "Saint Helena" },
  { code: "+1-869", name: "Saint Kitts and Nevis" },
  { code: "+1-758", name: "Saint Lucia" },
  { code: "+590", name: "Saint Martin" },
  { code: "+508", name: "Saint Pierre and Miquelon" },
  { code: "+1-784", name: "Saint Vincent and the Grenadines" },
  { code: "+685", name: "Samoa" },
  { code: "+378", name: "San Marino" },
  { code: "+239", name: "Sao Tome and Principe" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+221", name: "Senegal" },
  { code: "+381", name: "Serbia" },
  { code: "+248", name: "Seychelles" },
  { code: "+232", name: "Sierra Leone" },
  { code: "+65", name: "Singapore" },
  { code: "+1-721", name: "Sint Maarten" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+677", name: "Solomon Islands" },
  { code: "+252", name: "Somalia" },
  { code: "+27", name: "South Africa" },
  { code: "+82", name: "South Korea" },
  { code: "+211", name: "South Sudan" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+249", name: "Sudan" },
  { code: "+597", name: "Suriname" },
  { code: "+47", name: "Svalbard and Jan Mayen" },
  { code: "+268", name: "Swaziland" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+963", name: "Syria" },
  { code: "+886", name: "Taiwan" },
  { code: "+992", name: "Tajikistan" },
  { code: "+255", name: "Tanzania" },
  { code: "+66", name: "Thailand" },
  { code: "+228", name: "Togo" },
  { code: "+690", name: "Tokelau" },
  { code: "+676", name: "Tonga" },
  { code: "+1-868", name: "Trinidad and Tobago" },
  { code: "+216", name: "Tunisia" },
  { code: "+90", name: "Turkey" },
  { code: "+993", name: "Turkmenistan" },
  { code: "+1-649", name: "Turks and Caicos Islands" },
  { code: "+688", name: "Tuvalu" },
  { code: "+256", name: "Uganda" },
  { code: "+380", name: "Ukraine" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States" },
  { code: "+598", name: "Uruguay" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+678", name: "Vanuatu" },
  { code: "+379", name: "Vatican" },
  { code: "+58", name: "Venezuela" },
  { code: "+84", name: "Vietnam" },
  { code: "+681", name: "Wallis and Futuna" },
  { code: "+212", name: "Western Sahara" },
  { code: "+967", name: "Yemen" },
  { code: "+260", name: "Zambia" },
  { code: "+263", name: "Zimbabwe" },
];

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
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter countries based on search query
  // const filteredCountries = countries.filter((country) =>
  //   country.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase() === searchQuery.toLowerCase() // Exact match of full query
  );

  const phoneMaxLength = countryPhoneLengths[countryCode] || 15; // Default to 15 if country code not in map

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
                {/* <select
                  className="country_wrapper"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  style={{ marginRight: "10px" }}
                >
                 {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {`${country.code} (${country.name})`}
                    </option>
                  ))}
                </select> */}
                {/* <div className="countrySelector">
                <input
                  type="text"
                  placeholder="Search Country"
                  value={searchQuery}
                  onFocus={() => setShowDropdown(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {showDropdown && (
                  <ul className="dropdown">
                    {filteredCountries.map((country) => (
                      <li
                        key={country.code}
                        onClick={() => {
                          setCountryCode(country.code);
                          setSearchQuery(country.name);
                          setShowDropdown(false);
                        }}
                      >
                        {country.name} ({country.code})
                      </li>
                    ))}
                  </ul>
                )}
              </div> */}
              <div className="countrySelector">
                  {/* Input field for search */}
                  <input
                    type="text"
                    placeholder="Type Country Name"
                    value={searchQuery}
                    onFocus={() => setShowDropdown(true)} // Show dropdown when input is focused
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Hide dropdown after a slight delay when focus is lost
                  />

                  {/* Dropdown for countries */}
                  {showDropdown && (
                    <ul className="dropdown">
                      {filteredCountries.map((country) => (
                        <li
                          key={country.code}
                          onClick={() => {
                            setCountryCode(country.code); // Set selected country code
                            setSearchQuery(country.name); // Set search query to selected country name
                            setShowDropdown(false); // Hide dropdown
                          }}
                        >
                          {country.name} ({country.code})
                        </li>
                      ))}
                      {filteredCountries.length === 0 && <li>No countries found</li>}
                    </ul>
                  )}
                </div>

                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={phoneMaxLength}
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
