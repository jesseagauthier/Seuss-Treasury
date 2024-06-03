import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetailsPage() {
	const { id } = useParams()
	const [bookDetails, setBookDetails] = useState(null)

	useEffect(() => {
		fetch(`https://seussology.info/api/books/${id}`)
			.then((response) => response.json())
			.then((data) => setBookDetails(data))
			.catch((error) => console.log('Error fetching data:', error))
	}, [id])

	if (!bookDetails) return <div className='text-center mt-5'>Loading...</div>

	return (
		<div className='container mx-auto p-5'>
			<div className='flex flex-wrap md:flex-nowrap bg-white rounded-lg overflow-hidden shadow-lg'>
				<div className='md:w-1/3'>
					<img
						src={bookDetails.image}
						alt={bookDetails.title}
						className='object-cover w-full h-full'
					/>
				</div>
				<div className='w-full md:w-2/3 p-4'>
					<h2 className='font-bold text-2xl md:text-3xl mb-2'>
						{bookDetails.title}
					</h2>
					<div className='text-gray-800 text-sm mb-3'>
						Published: {bookDetails.year_published}
					</div>
					<p className='text-gray-700 text-base w-[80%]'>
						{bookDetails.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default BookDetailsPage
