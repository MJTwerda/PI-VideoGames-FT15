import React from 'react';
//import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { getVideogames } from '../Actions/actions';
import { NavLink } from 'react-router-dom';
import logoNavBar from '../../logoNavBar.png';


export default function NavBar() {
    
    return (
        <div>
            <div>
            <NavLink exact to="/">
                <img src={logoNavBar} width="30" height="30" alt='buscando Imagen' />
            </NavLink>
            </div>
            <nav>
                <ul>
                    <h3>
                        <NavLink exact to="/videogames" >
                            <h3>Videogames</h3>
                        </NavLink>
                        <NavLink to="/creategame" >
                            <h3>Create</h3>
                        </NavLink>
                    </h3>
                </ul>
            </nav>
        </div>
    )
}