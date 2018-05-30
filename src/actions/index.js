import axios from 'axios';
import md5 from 'blueimp-md5';

export const FETCH_CHARACTERS = "fetch_characters";
export const FETCH_CHARACTER_DETAIL = "fetch_character_detail";
export const FETCH_STORIES = "fetch_stories";
export const FETCH_STORIE = "fetch_storie";
export const FETCH_COMICS_LIST = "fetch_comics_list";
export const FETCH_COMICS = "fetch_comics";
export const FETCH_SERIES = "fetch_series";
export const FETCH_SERIE = "fetch_serie";
export const FETCH_DATA = "fetch_data";


const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
const BASE_URL = "http://gateway.marvel.com/";

const getparams =(offset)=>{
    const ts = Date.now();
    const hash = md5(ts + API_PRIVATE + API_PUBLIC);
    return ({params :
            { ts: ts,  apikey: API_PUBLIC , hash:hash, limit:50, offset:offset }
            } );

}



export function fetchCharacters(offset) {

    const request = axios.get(`${BASE_URL}/v1/public/characters`, getparams(offset))
        .then((res)=>res.data.data.results);

    return {
        type: FETCH_CHARACTERS,
        payload: request
    };
}



export function fetchCharacterDetail(id) {

    const request = axios.get(`${BASE_URL}/v1/public/characters/${id}`, getparams())
        .then((res)=>res.data.data.results);

    return {
        type: FETCH_CHARACTER_DETAIL,
        payload: request
    };
}

export function fetchComics(id) {

    const request = axios.get(`${BASE_URL}/v1/public/comics/${id}`, getparams())
        .then((res)=>res.data.data.results);

    return {
        type: FETCH_COMICS,
        payload: request
    };
}
export function fetchSerie(id) {

    const request = axios.get(`${BASE_URL}/v1/public/series/${id}`, getparams())
        .then((res)=>res.data.data.results);

    return {
        type: FETCH_SERIE,
        payload: request
    };
}
export function fetchStorie(id) {

    const request = axios.get(`${BASE_URL}/v1/public/stories/${id}`, getparams())
        .then((res)=>res.data.data.results);

    return {
        type: FETCH_STORIE,
        payload: request
    };
}
export function fetchData(url){
    const request = axios.get(`${BASE_URL}/v1/public/${url}`, getparams())
        .then((res)=>res.data.data.results);

    return {
        type: FETCH_DATA,
        payload: request
    };
}


