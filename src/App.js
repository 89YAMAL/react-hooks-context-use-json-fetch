import React from 'react';
import './App.css';
import Data from './components/Data';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Data />
      <Loading />
      <Error />
    </div>
  );
}

export default App;
