import React from 'react';
import Form from './Form';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px' }}>
        <h1>Contact Us</h1>
        <Form />
      </div>
    </div>
  );
};

export default App;