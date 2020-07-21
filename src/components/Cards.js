import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {removeCard} from '../redux/actions'

function Cards (props) {


const dispatch = useDispatch()

	return (

		<Fragment>
		{props.heroes.map((item , index)=>(
			
<div className = 'card p-4 m-4 bg-dark' style = {{width : 'auto' , minWidth : '1000px' }} key = {index}>
			<div className='d-flex justify-content-between'>
					<div>	
						<Link to={'/profile/'+item.name}>
							<img  src = {item.avatar} alt ={''} 
										className="card-img-top borderImages " 
										style={{maxWidth : '150px' , maxHeight : '150px'}}/>
						</Link> 
					</div>

						<h5 className='card-title mt-4'>{item.name}</h5>

					<div className='p-4'>
						<div>
							<Link to ={'/profile/'+item.name} className='btn btn-secondary mr-4'>Подробнее</Link>
								<button type ='button' 
											className = ' btn btn-outline-danger btn-sm'
											onClick={()=>dispatch(removeCard(item.id))}>Удалить &times; </button>													
						</div>				
					</div>
					</div>
			</div>
			)
		)
	}		
	</Fragment>

	)	
}

export default Cards

