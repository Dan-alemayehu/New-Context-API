// UserInput.js
import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

const UserInput = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const { updateUser } = useContext(AppContext);

  const handleInputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'age') {
      setAge(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name, age);
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>User Input</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={age} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInput;
