import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BooksPage() {
	const [books, setBooks] = useState([])

	useEffect(() => {
		fetch('https://seussology.info/api/books')
			.then((response) => response.json())
			.then((data) => setBooks(data))
			.catch((error) => console.log('Error fetching data:', error))
	}, [])

	return (
		<div className='container mx-auto p-4'>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
				{books.map((book) => (
					<Link
						to={`/book/${book.id}`}
						key={book.id}
						className='block hover:scale-125 transition duration-300'
					>
						<img
							src={book.image}
							alt={book.title}
							className='w-full h-auto object-cover rounded border border-white'
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default BooksPage
