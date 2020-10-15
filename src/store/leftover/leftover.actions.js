import {restaurants} from 'data/restaurant';
import {categorise} from "data/food-lists"

export const GET_LEFTOVERS = '[LEFTOVER] GET_LEFTOVERS';
export const GET_LEFTOVER_CATEGORIES = '[LEFTOVER] GET_LEFTOVER_CATEGORIES';
export const SET_SEARCH_TEXT = '[LEFTOVER] SET_SEARCH_TEXT';

export function getLeftovers()
{
    return {
        type	: GET_LEFTOVERS,
		payload	: restaurants,		
    }
}

export function getLeftoverCategories()
{
    return {
        type	: GET_LEFTOVER_CATEGORIES,
		payload	: categorise,
    }
}

export function setSearchText(event)
{
    return {
        type	: SET_SEARCH_TEXT,
        payload	: event.target.value.toLowerCase()
    }
}

