import React, { useEffect } from 'react';
import { getDetailGame } from '../Actions/actions.js';

import {useSelector, useDispatch} from 'react-redux'
//import { connect } from 'react-redux';
//import { useParams  } from 'react-router';

export default function DetailGame(props) {
    //const [gameId, setGame] = useState({});
    const detailGame = useSelector(state => state.detailGame);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailGame(props.idGame));
    }, [detailGame])

    return (
        <div key={detailGame.id}>
            <h3>DETALLES DEL GAME</h3>
            <h2>{detailGame.name}</h2>
            <img src={detailGame.image} width='400' height='250' alt='Search'/>
            <h4>Released: {detailGame.released}</h4>
            {/* <ul key={detailGame.Genre.id}>
            {detailGame.Genres.map(genre => {
                return (
                 <li>{genre.name}</li>
                 )
            })}
            </ul>  */}
             <p>{detailGame.description}</p>
             {/* <ul>
            {detailGame.platforms.map(plat => {
                return <p key = {plat.id}>{plat.name}</p>
            })}
            </ul> */}
            <h4>Rating: {detailGame.rating}</h4>
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