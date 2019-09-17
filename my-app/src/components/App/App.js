import React from 'react';
import './App.module.css';
import Reader from '../Reader/Reader';
import items from '../../db/publications.json';

const App = () => (
  <div>
    <Reader items={items} />
  </div>
);

export default App;
