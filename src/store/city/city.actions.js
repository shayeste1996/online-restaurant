import axios from 'axios';
// eslint-disable-next-line 
import {citis} from '../../data/restaurant';

export const GET_CITIES = '[RESTAURANT] GET_CITIES';
export const CITY_CHANGE = '[RESTAURANT] CITY_CHANGE';

//export function getCities()
//{
//    return {
//        type	: GET_CITIES,
//		payload	: citis,		
//    }
//}

export function getCities()
{
    const request = axios.get('/eda/generalSettings/getcities?cityLocation=32.456456,56.6456456&SSIPD=5.63.13.165&lang=en');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_CITIES,
                payload: response.data
            })
        );
}

export function cityChange(city)
{
	window.localStorage.setItem('city', JSON.stringify(city));
    return {
        type	: CITY_CHANGE,
		payload	: city,		
    }
}

