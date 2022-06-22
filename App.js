import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './styles/style.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/dashboard' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
