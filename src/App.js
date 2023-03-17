import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';

export default function App (){
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    </div>
  );
}
