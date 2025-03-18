import React, { useState } from "react";
import { parsePhoneNumberFromString, getCountries } from "libphonenumber-js";

export default function App() {
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("IN");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setPhoneNo(value);

    const phoneNumber = parsePhoneNumberFromString(value, country);
    setIsValid(phoneNumber ? phoneNumber.isValid() : false);
  };

  return (
    <div className="container">
      <h2>Mobile Number Validator</h2>
      <label className="select">
        Select Country:
        <select
          className="dropdown"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {getCountries().map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className="number"
          type="text"
          onChange={handleChange}
          value={phoneNo}
          placeholder="Enter phone Number"
        />
        <p style={{ color: isValid ? "green" : "red" }}>
          {isValid ? "Valid mobile number" : "Invalid mobile number"}
        </p>
      </label>
    </div>
  );
}
