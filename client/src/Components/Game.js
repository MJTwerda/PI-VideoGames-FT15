import React from 'react';
import { Link } from 'react-router-dom';

export default function Game({games, loading}) {

    if (loading) {
        return <h3>Loading Games...</h3>
    }

    return (
        <ul>
        {
            games.map(game => {
                return (
                <div key={game.id}>
                    <Link to={`/videogame/${game.id}`}>
                        <h4>{game.name}</h4>
                        <img src={game.image} width='400' height='250' alt='Search'/>
                    </Link>
                    <ul>
                        {game.Genres.map(genre => (
                            <li>{genre.name}</li> 
                        ))}
                    </ul>
                </div>
            )
        })}
            
        </ul>
    )
}