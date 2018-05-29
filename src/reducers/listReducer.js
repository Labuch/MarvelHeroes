import {FETCH_STORIES, FETCH_CHARACTERS, FETCH_COMICS_LIST, FETCH_SERIES} from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return action.payload;
        case FETCH_SERIES:
            return action.payload;
        case FETCH_COMICS_LIST:
            return action.payload;
        case FETCH_STORIES:
            return action.payload;
        default:
            return state;
    }
}