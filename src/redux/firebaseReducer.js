import {DOWLOAD_HEROES , REMOVE_CARD} from './types'
const initialState = {
	heroes : []
}

export const firebaseReducer = (state = initialState , action) =>{

	switch ( action.type) {

		case DOWLOAD_HEROES : 
		return {...state , heroes : action.payload}
		case REMOVE_CARD : 
		return {...state  ,heroes : state.heroes.filter(item => item.id !== action.payload)}
		default : return state
	}
}