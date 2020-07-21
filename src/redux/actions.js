import axios from 'axios'
import {DOWLOAD_HEROES , 
	REMOVE_CARD , 
	SHOW_MODAL , 
	CLOSE_MODAL , 
	SHOW_LOADER ,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
	DOWLOAD_CARDS} from './types'


	const url=process.env.REACT_APP_FB_URL


	export function dowloadData(){


		return {type : DOWLOAD_CARDS}
// 	return async dispatch => {
// 		try {
// 			dispatch(showLoader())
// 		const response = await axios.get(`${url}/heroes.json`)

// 		const payload = Object.keys(response.data).map(key => {
// 			return {
// 				...response.data[key],
// 				id :  key
// 			}
// 		})
// 		dispatch({
// 			type : DOWLOAD_HEROES ,
// 			payload : payload
// 		})
// dispatch(hideLoader())} 
// 		catch (e) {
// dispatch(showAlert('Ошибка!Попробуйте пожалуйста перезагрузить страницу'))
// 		}

// 	}
}


export function removeCard(id){
	return async dispatch =>{
		// await axios.delete(`${url}/heroes/${id}.json`)
		dispatch ({
			type : REMOVE_CARD , 
			payload : id 
		})
	}

}

export function submitPost(obj){
	
	return async dispatch =>{
		await axios.post(`${url}/heroes.json` , obj)

	}

}

export function showModal (){

	return dispatch =>{
		dispatch ({type : SHOW_MODAL})
	}
}

export function closeModal (){

	return dispatch =>{
		dispatch ({type : CLOSE_MODAL})
	}
}

export function showLoader (){

	return dispatch =>{
		dispatch ({type : SHOW_LOADER})
	}
}

export function hideLoader (){

	return dispatch =>{
		dispatch ({type : HIDE_LOADER})
	}
}

export function showAlert (text){

	return dispatch =>{
		dispatch (
			{type : SHOW_ALERT , 
				payload : text}
				)
		setTimeout(()=>{ dispatch(hideAlert())},2000)
	}
}	


export function hideAlert (){

	return dispatch =>{
		dispatch ({type : HIDE_ALERT})
	}
}



