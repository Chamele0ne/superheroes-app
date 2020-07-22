import React , {Fragment , useEffect , useState} from 'react'
import Pagination from '../components/Pagination'
import Cards from '../components/Cards'
import { useDispatch , useSelector} from 'react-redux'
import {dowloadData } from '../redux/actions'
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

function Home () {

	const dispatch = useDispatch()
	const selector = useSelector( state => { return state})
	const textAlert = useSelector( state => {return state.loaderReducer.alert})

	const [currentPage , setCurrentPage ] =useState(1)
	const [cardsPerPage  ] =useState(5)





	useEffect(()=>{
		dispatch(dowloadData())
//eslint-disable-next-line
} , [])

//get current posts
const indexOfLastPost = currentPage * cardsPerPage
const indexOfFirstPost = indexOfLastPost-cardsPerPage
const currentCards= selector.firebaseReducer.heroes.slice(indexOfFirstPost,indexOfLastPost)
	
function paginate(paginateNumber , event){
event.preventDefault()
	setCurrentPage(paginateNumber)
}

return (
	<Fragment>

	<TransitionGroup>
	{textAlert && <CSSTransition timeout={750} classNames='alert'><Alert text = {textAlert} /></CSSTransition>}
	</TransitionGroup>


	{selector.loaderReducer.loading ? 	<div className='text-center' style = {{paddingTop : '300px'}}><Loader /></div> : 
	<div><Cards heroes = {currentCards} /> 
	<Pagination className = 'm-2'
	cardsPerPage = {cardsPerPage} 
	totalCards = {selector.firebaseReducer.heroes.length} 
	paginate = {paginate}/> </div> }


	</Fragment>
	)

}

export default Home

