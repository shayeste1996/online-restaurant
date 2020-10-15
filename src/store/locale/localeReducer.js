import * as Actions from './localeActions';

const initialState = {
	languages	: [],
	current		: {
		locale		:'En',
		direction	: 'ltr',
	},
};

const localeReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_LANGUAGES:
        {
            return getLanguage(action.payload, state);
        }
        case Actions.LOCALE_CHANGE:
        {
            return {
                ...state,
				current : action.payload,
            };
        }
        default:
        {
            return state;
        }
    }
};

export default localeReducer;

const getLanguage = (payload, state) => { 
	try{
		if(payload.msgFlag !== "0")
			return state;
		const data = payload.data;
        const languages = data.map(({lan_id:id, lan_name:locale, flagUrl:icon,
             lan_title:name, lan_dir:direction, lan_defult}) =>
              ({id, locale, icon, name, direction, default:lan_defult}));
		const current = languages.find(item => item.default === "true");
		return {...state, languages, current : current ? current : state.current};
	}
	catch{}
	return state;
}