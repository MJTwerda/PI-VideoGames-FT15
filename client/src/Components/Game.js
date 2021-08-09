import React from 'react';
import { Link } from 'react-router-dom';

export default function Game(props) {

    return (
        <ul key={props.id}>
            <Link to={`/videogame/${props.id}`}>
            <li>{props.name}</li>
            </Link>
                {/* <img src={props.image} width='400' height='250' alt='Search'/>
            <ul>{props.genres.map(genre => 
                <li>{genre.name}</li>
            )}</ul> */}
        </ul>
    )
}