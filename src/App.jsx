import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BooksPage from './pages/BooksPage'
import BookDetailsPage from './pages/BookDetailsPage'
import QuotesPage from './pages/QuotesPage'

function App() {
	return (
		<Router>
			<nav className=' p-5'>
				<div className='container mx-auto flex gap-10 items-center'>
					<Link to='/' className='text-3xl'>
						Seuss Treasury
					</Link>
					<div className='flex gap-4'>
						<Link
							to='/'
							className='hover:bg-blue-200 p-3 border border-white rounded-lg transition-colors duration-300'
						>
							Books
						</Link>
						<Link
							to='/quotes'
							className='hover:bg-blue-200 p-3 border border-white rounded-lg transition-colors duration-300'
						>
							Quotes
						</Link>
					</div>
				</div>
			</nav>
			<main className='container mx-auto p-4'>
				<Routes>
					<Route path='/' element={<BooksPage />} />
					<Route path='/book/:id' element={<BookDetailsPage />} />
					<Route path='/quotes' element={<QuotesPage />} />
				</Routes>
			</main>
		</Router>
	)
}

export default App
