import {HIDE_LOADER , SHOW_LOADER , SHOW_ALERT , HIDE_ALERT } from './types'

const initialState = {
	loading : false , alert : null , visible : false
}



export const loaderReducer = (state=initialState , action ) => {


	switch (action.type) {
		case SHOW_LOADER : return { ...state , loading : true }
		case HIDE_LOADER : return { ...state , loading : false }
		case SHOW_ALERT : return { ...state , alert : action.payload  , visible : true}
		case HIDE_ALERT : return { ...state , alert : null  , visible : false}
		default : return state 
	}
}