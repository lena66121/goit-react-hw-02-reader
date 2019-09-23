import React from 'react';
import './App.module.css';
import Reader from '../Reader/Reader';
import items from '../../db/publications.json';

const App = () => <Reader items={items} />;

export default App;
