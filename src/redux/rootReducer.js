import {combineReducers} from 'redux'
import {firebaseReducer} from './firebaseReducer'
import {modalReducer} from './modalReducer'
import {loaderReducer} from './loaderReducer'

export const rootReducer = combineReducers({
 firebaseReducer , 
 modalReducer ,
 loaderReducer

})
