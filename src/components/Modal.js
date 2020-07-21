import React , {Fragment} from 'react'
import { useDispatch  , useSelector} from 'react-redux'
import {closeModal } from '../redux/actions'
import {NavLink} from 'react-router-dom'

function Modal(){

const dispatch = useDispatch()
const selector = useSelector(state => {return state})
// console.log(selector)
	return (
		<Fragment>
			{selector.modalReducer.isOpen &&
				<div className='modal '>
					<div className = 'modal-body bg-light text-center'>
						<p style={{color :'green'}}>	
							Поздравляем!
							<strong>Ваш пресонаж создан!</strong>
							</p>
							
			<NavLink 
      				className = 'btn btn-primary'
      				to="/"
      				exact
      				onClick={()=>{dispatch(closeModal())}}
      				>Главная</NavLink>
				</div>
			</div>}
			</Fragment>

		)
}

export default Modal