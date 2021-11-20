import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Cards';
import Sdata from './Sdata';


function ncard(val) {
  return (
    <Card 
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
}

ReactDOM.render(
  <>
  <h1 className='heading_style'>List of Top 5 Netflix in 2020</h1>
  

  { Sdata.map(ncard) }
   {/* This is called as Functional Programming, i.e,. function inside function */}

  </>,
  document.getElementById('root')
);


