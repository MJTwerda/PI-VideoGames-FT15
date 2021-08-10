import { GET_VIDEOGAMES, DETAIL_GAME , GET_GENRES, ADD_GAME } from '../Actions/actions.js';

const initialState = {
    searchGames: [],
    detailGame: {},
    //favouriteGames: [],
    genresGames: []
};

export function rootReducer(state = initialState, action) {
if (action.type === GET_VIDEOGAMES) {
    return {
        ...state,
        searchGames: action.payload
    }
}
if (action.type === GET_GENRES) {
    return {
        ...state,
        genresGames: action.payload
    }
}
if (action.type === DETAIL_GAME) {
    return {
        ...state,
        detailGame: action.payload
    }
}
if (action.type === ADD_GAME) {
    return {
        ...state,
        searchGames: action.payload
    }
}
return state
}

export default rootReducer;