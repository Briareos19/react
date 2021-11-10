import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#app');


// ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" />  , divRoot );
ReactDOM.render(
    <>
    <PrimeraApp saludo="Hola, soy un saludo"/>
    <CounterApp />  
    </> 
,divRoot );
