export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

//listowanie wszystkich dostępnych państw
export function getCountries() {
    return {
        type: GET_COUNTRIES
    };
}

//listowanie 1 konkretnego państwa
export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    };
}
// usuwanie państwa
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}
//Szukanie państw
export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    };
}
//Szukanie kontynentów
export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    };
}