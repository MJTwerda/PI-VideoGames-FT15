import React, { useEffect } from 'react';
import { getDetailGame } from '../../Actions/actions.js';

import {useSelector, useDispatch} from 'react-redux';

export default function DetailGame(props) {

    const detailGame = useSelector(state => state.detailGame);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailGame(props.idGame));
    }, []);

    if (!detailGame) {
        return <h3>There is no game with the searched id. Please try with another id</h3>
    }
    
    return ( 
       <div>
        <h4>{detailGame.name}</h4>
        <img src={detailGame.image} width='400' height='250' alt='Not Found'/>
        {detailGame.platforms?.map(plat => {
            if (typeof plat === 'string') {
                return (<p>{plat}</p>)
            } else {
          return (
           <p>{plat.name}, </p>
          )
            }
        })}
        <h4>Release: {detailGame.released}</h4>
        <p>{detailGame.description}</p>
        <h5>Rating: {detailGame.rating}</h5>
        <ul>{detailGame.Genres?.map(gen => {
            return (
                <li>{gen.name}</li>
            )
        })}
        </ul>


       </div>
    )
}
    /* function mapDispatchToProps(dispatch) {
        return {
           getDetails: gameId => dispatch(getDetailGame(gameId)),
        }
    }

    function mapStateToProps(state) {
        return {
            detail: state.detailGame
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(DetailGame);  */


//key={detailGame.Genre.id}


/* 
 <div key={detailGame.id}>
            {<h3>DETALLES DEL GAME</h3>}
            <h2>{detailGame.name}</h2>

            <h4>Released: {detailGame.released}</h4>
            
            {<ul>
            {detailGame.Genres.map(genre => {
                    <li key={genre.id}>{genre.name}</li>
            })}
            </ul>  
            <img src={detailGame.image} width='400' height='250' alt='Search'/>}

             <p>{detailGame.description}</p>

             {<ul>
            {detailGame.platforms.map(plat => {
                return  (
                    <p key={plat.id}>
                        {plat.name}
                    </p>
                )
            })}
            </ul>}
            <h4>Rating: </h4>
            {<h4>Rating: {detailGame.rating}</h4>}
        </div>
*/