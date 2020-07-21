import React  from 'react'

function Alert (props) {

	return (

	<div className=  "alert alert-danger alert-dismissible" role="alert">
		&nbsp;
		{props.text}
		</div> 
		)
}

export default Alert