import React, { useState } from "react";

export default function App() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const validate = (input) => {
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
        
        if (strongPassword.test(input)) {
            setStrength('Strong')
        }else if(mediumPassword.test(input)){
            setStrength('Medium')
        }else{
            setStrength('Weak')
        }
    }

    const handleChange = (e) => {
        setPassword(e.target.value)
        validate(e.target.value)
    }
  return (
    <>
      <div className="container">
        <h1>Enter Password</h1>

        <input 
        type="password" 
        placeholder="Enter Password"
        value={password}
        onChange={handleChange}
        />
        <p>Password strength: {strength}</p>
      </div>
    </>
  );
}
