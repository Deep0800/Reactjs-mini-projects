import React, { useState } from "react";

export default function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const [random, setRandom] = useState(null);
  const [otp, setOtp] = useState("");

  const handleGenButton = () => {
    const minValue = parseInt(min);
    const maxValue = parseInt(max);

    const randomValue = Math.floor(Math.random() * (maxValue + 1) + minValue);
    setRandom(randomValue);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = () => {
    if (parseInt(otp) === random) {
      alert("OTP Verified");
    } else {
      alert("Incorrect OTP. Try again.");
    }
  };
  return (
    <>
      <div className="container">
        <h1>OTP Generator</h1>

        <button className="genBtn" onClick={handleGenButton}>
          Generate OTP
        </button>

        {random != null && <div>Random number is: {random}</div>}
      </div>

      <div className="otpInp">
        <input
          type="number"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
          className="inpField"
        />

        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
