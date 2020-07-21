import React from 'react';
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import Home  from './pages/Home'
import Profile  from './pages/Profile'
import Navbar from './components/Navbar'
import Create from './pages/Create'

function App() {
  return (
    <BrowserRouter >
    <div style={{backgroundColor :"#012430" , minHeight : '1500px'}}>
		<Navbar />
  <div className='container '>
				<Switch>
					<Route  path='/' exact component ={Home}/>
					<Route  path='/Profile/:name' component ={Profile}/>
					<Route  path='/Create/' component ={Create}/>
				</Switch>
				</div>
				</div>

    </BrowserRouter>
  );
}

export default App;
