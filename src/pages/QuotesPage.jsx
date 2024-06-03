import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function QuotesPage() {
	const [quotes, setQuotes] = useState([])

	useEffect(() => {
		fetch('https://seussology.info/api/quotes/random/10')
			.then((response) => response.json())
			.then((data) => setQuotes(data))
			.catch((error) => console.log('Error fetching data:', error))
	}, [])

	return (
		<div className='container mx-auto p-5'>
			<div className='space-y-4'>
				{quotes.map((quote, index) => (
					<blockquote
						key={index}
						className='p-4 italic border-l-4 bg-gray-100 text-gray-600 border-gray-500 quote'
					>
						<p className='mb-2 text-xl'>"{quote.text}"</p>
						<cite className='block mt-4 mr-2 text-sm'>
							-{' '}
							<Link
								to={`/book/${quote.book.id}`}
								className='text-blue-600 hover:text-blue-800 transition duration-300'
							>
								{quote.book.title}
							</Link>
						</cite>
					</blockquote>
				))}
			</div>
		</div>
	)
}

export default QuotesPage
