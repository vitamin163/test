import React from 'react';
import './scss/App.scss';
import image from './img/jp-valery-1052513-unsplash.png';
import C from './C.jsx';

const App = () => (
  <>
    <div className="main">Hello World!</div>
    <C />
    <div className="main">Hello</div>
    <img src={image} alt='' />
  </>
);

export default App;
