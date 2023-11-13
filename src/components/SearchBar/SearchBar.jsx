import { useState } from 'react'


export default function SearchBar(props){

	const [searchTerm, setSearchTerm] = useState('')

	function handleChange(e){
		setSearchTerm(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault(); // stop the form from making a http request!
		props.setSearchGifCategory(searchTerm)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={searchTerm} onChange={handleChange} placeholder='Search Gif'/>
			<button type='Submit'>Search</button>
		</form>
	)
}