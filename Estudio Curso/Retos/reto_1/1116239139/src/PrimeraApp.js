import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo }) => {
    // const titulo = '';
    const titulo = saludo;
    return (
        <>
            <h1>{ titulo }!!!</h1>
            <p>{ subtitulo }</p>
        </>
    );
        
} 

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;