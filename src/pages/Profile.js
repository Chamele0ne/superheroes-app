import React ,{Fragment} from 'react'
import { useSelector} from 'react-redux'

function Profile (props) {
	const urlName=props.match.params.name
	const selector = useSelector( state => {return state})
	let filter = selector.firebaseReducer.heroes.filter( item => item.name === urlName)

console.log(filter)

return (
	<Fragment>
	

	{filter.length ? 
  <div className="d-flex mt-3" >
    <div className = 'd-block bg-secondary mb-3'>

    {Object.keys(filter[0]).map((item , index) => item.includes('image') ? <img key = {index} src = {filter[0][item]} alt ={''} 
										className="card-img-top m-2 d-block round " 
										style={{width : '200px' , height : '200px'}}
									/> : null) 
}		
</div>



<div className="card text-white bg-dark mb-3 " style={{minWidth: '70%'}}>
  <div className="card-header text-center  " style = {{fontSize : '150%'}}>{filter[0].name}</div>
  <div className="card-body ">
    <h5 className="card-title"><strong className='text-muted'>Real name</strong>  : {filter[0].real_name}</h5>
    <p className="card-text"><strong className='text-muted'>Краткое описание</strong> : {filter[0].origin_description}</p>
   <p className="card-text"><strong className='text-muted'>Суперспособности </strong> : {filter[0].superpowers}</p>
     <p className="card-text"><strong className='text-muted'>Коронные фразы</strong>  : {filter[0].catch_phrase}</p>
  </div>
</div>


</div> : <h5>Loading...</h5> 
}
</Fragment>
	)

}

export default Profile