// App.js
import React from 'react';
import UserInput from './UserInput';
import UserInfo from './UserInfo';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <h1>My App</h1>
        <UserInput />
        <UserInfo />
      </div>
    </AppProvider>
  );
};

export default App;
