import {takeEvery , put , call} from 'redux-saga/effects'
import {DOWLOAD_CARDS , DOWLOAD_HEROES} from './types'
import {showLoader , hideLoader , showAlert} from './actions'
import axios from 'axios'

const url=process.env.REACT_APP_FB_URL

export function* sagaWatcher(){

	yield takeEvery(DOWLOAD_CARDS , sagaWorker)

}

function* sagaWorker(){
	try{
		yield put(showLoader())
		const payload = yield call(dowloadData)
		yield put({type : DOWLOAD_HEROES , payload : payload})
		yield put(hideLoader())
	}catch (e) {
		yield put (showAlert('Ошибка!Попробуйте пожалуйста перезагрузить страницу'))
	}
}

async function dowloadData(){
	const response = await axios.get(`${url}/heroes.json`)
	return Object.keys(response.data).map(key => {
		return {
			...response.data[key],
			id :  key
		}
	})
}