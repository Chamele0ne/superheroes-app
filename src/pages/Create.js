import React , {useState} from 'react'
import {submitPost} from '../redux/actions'
import { useDispatch , useSelector} from 'react-redux'
import Modal from '../components/Modal'
import {showModal , showAlert , hideAlert} from '../redux/actions'
import Alert from '../components/Alert'
import {CSSTransition , TransitionGroup} from 'react-transition-group'
import Input from '../components/Input'

function Create() {

const dispatch = useDispatch()
const selector = useSelector (state=> {return state.loaderReducer.alert })

const state = useSelector (state=> {return state })
console.log(state)
const [character , setCharacter] = useState (
	{name : '',
	origin_description : '',	
	real_name: '',
	catch_phrase : '',
	superpowers : '', 
	avatar : '',
	image1 : '',
	image2 : '',
	image3 : ''
}
)

	function onChangeHandler(event){
console.log(event.target)
setCharacter({...character  ,  [event.target.name] : event.target.value })

}

function submitHandler(event){
	event.preventDefault()


let result = Object.values(character).filter(item=> item==='')

if (result.length) {dispatch (showAlert('Заполните все поля'))}else{			
	dispatch(submitPost(character))
		dispatch(showModal())	
		dispatch(hideAlert())
} 

	}
// console.log(character)
return (
	<div className='text-white'>
		<form  className='text-center' onSubmit={(event)=>submitHandler(event)}>
			
			<TransitionGroup>
 			{selector && <CSSTransition timeout={750} classNames='alert'><Alert text = {selector} /></CSSTransition>}
			</TransitionGroup>

		<div className="form-group " style={{width : '50%' , marginRight : '25%' , marginLeft : '25%'}}>
		<Modal />

{Object.keys(character).map(item=>(item==='origin_description' ?
	null : <Input name ={item} func ={onChangeHandler} title = {item} /> 
 ))}
	
		<label htmlFor="Input2">Discription</label>
		<textarea 
		type="text" 
		className="form-control" 
		name='origin_description' 
		value = {character.origin_description}  
		placeholder="Discription" 
		rows="5" 
		onChange = {(event)=>onChangeHandler(event)}/>

 <input  to ={'/'} className="btn btn-primary mt-2" type="submit" value="Submit" onChange = {(event)=>onChangeHandler(event)}/>

</div>
</form>

</div>
)

}

export default Create