import { GET_VIDEOGAMES, GET_GENRES } from '../Actions/actions.js';

const initialState = {
    searchGames: [],
    favouriteGames: [],
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
return state
}

export default rootReducer;