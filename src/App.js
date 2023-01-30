import React from 'react';
import ESSearch from "../src/components/ESSearch";
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="tc ma1 pa4 min-vh-100">
        <ESSearch />
      </div>
    </React.Fragment>
  );
}

export default App;
