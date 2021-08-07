import React, {useState} from 'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';
import { getGenres } from '../Actions/actions.js';

function detailGame(props) {
    return (
        <div>
            <h2>Estamos en Detalles de Juego</h2>
        </div>
    )
}

export default detailGame;
