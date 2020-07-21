import {REMOVE_CARD} from './types'
import {showAlert} from './actions'


export function deleteMiddleWare(state){

	return function(next){
		return function(action){
			if (action.type === REMOVE_CARD){
				state.dispatch(showAlert('Карточка успешно удалена'))	
			}
			return next(action)
		}
	}

}