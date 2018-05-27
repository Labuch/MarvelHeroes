import {FETCH_CHARACTER_DETAIL, FETCH_COMICS, FETCH_SERIE, FETCH_STORIE, FETCH_DATA} from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CHARACTER_DETAIL:
            return action.payload ;
        case FETCH_COMICS:
            return action.payload;
        case FETCH_SERIE:
            return action.payload;
        case FETCH_STORIE:
            return action.payload;
        case FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
}