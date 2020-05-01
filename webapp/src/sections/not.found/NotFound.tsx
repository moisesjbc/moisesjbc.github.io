import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <p>La página solicitada no existe</p>
            <p><NavLink to="/">Volver a la página principal</NavLink></p>
        </>
    );
}

export default NotFound;