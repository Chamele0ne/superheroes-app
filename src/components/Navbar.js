import React from 'react'
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {hideAlert} from '../redux/actions'
function Navbar(){

const dispatch = useDispatch()

	return (
		<nav className='navbar navbar-dark navbar-expand bgcolor'>
			<div className = 'navbar-brand'>
			Heroes app
			</div>
			<ul className="navbar-nav ">
      	<li className="nav-item ">
      		<NavLink 
      				className = 'nav-link'
      				to="/"
      				exact
      				onClick = {()=>dispatch(hideAlert())}
      				>Главная</NavLink>
	 	   </li> 
          <li>
            <NavLink 
              className = 'nav-link'
              to="/Create">Создать
          </NavLink>
          </li>
    		</ul>
		</nav>
		)
}

export default Navbar