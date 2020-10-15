import * as Actions from './leftover.actions';

const initialState = {
	leftover			: [],
	leftoverCategorise	: [],
	searchText     		: '',
};

const leftover = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_LEFTOVERS:
        {
            return {
                ...state,
				leftover : action.payload,
            };
        }
        case Actions.GET_LEFTOVER_CATEGORIES:
        {
            return {
                ...state,
				leftoverCategorise : action.payload,
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.payload
            };
        }		
        default:
        {
            return state;
        }
    }
};

export default leftover;
