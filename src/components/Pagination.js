import React from 'react'
import {Link} from 'react-router-dom'
function Pagination (props){
const pageNumbers = []


for (let i=1 ; i<= Math.ceil(props.totalCards / props.cardsPerPage) ; i++) 
pageNumbers.push(i)

return (
<nav className=' d-flex justify-content-around'>
	<ul className = 'pagination text-center'>
		{pageNumbers.map(number => (
			<li key = {number} className = 'page-item m-1'>
				<Link onClick={(event)=> props.paginate(number,event)} to="" className="page-link">
				{number}
				</Link>
			</li>
			))}
	</ul>
</nav>
	)
}

export default Pagination