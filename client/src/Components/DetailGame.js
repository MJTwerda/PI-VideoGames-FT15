import React, { useEffect } from 'react';
import { getDetailGame } from '../Actions/actions.js';

import {useSelector, useDispatch} from 'react-redux'
//import { connect } from 'react-redux';
//import { useParams  } from 'react-router';

export default function DetailGame(props) {
    //const {gameId, setGame} = useState({});
    const detailGame = useSelector(state => state.detailGame);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailGame(props.idGame));
    }, [detailGame])

    return (
        <div>
        {/* {console.log(props.detail)} */}

            <h3>DETALLES DEL GAME</h3>
            <h2>{detailGame.name}</h2>
            <img src={detailGame.image} width='400' height='250' alt='Search'/>
            <h2>Released: {detailGame.released}</h2>
            <ul>
            {detailGame.Genres.map(genre => {
                return <li>{genre.name}</li>
            })}
            </ul>
             <h4>{detailGame.description}</h4>
            {detailGame.platforms.map(plat => {
                return <p>{plat.name}</p>
            })}

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