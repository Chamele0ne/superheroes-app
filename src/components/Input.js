import React, {Fragment} from 'react'

function Input({name ,func , title} ){

	return (
		<Fragment>
		<label>{title}</label>
		<input type="text" 
		className="form-control-file" 							
		name={name}
		placeholder={title}
		onChange = {(event)=>func(event)}
		/>
		</Fragment>
		)
}

export default Input