import React from 'react'
import 'tachyons'

const Search =({searchChange})=>{

	return(

		<div className="pa2">
			<input onChange={searchChange} type="search" placeholder="Search a robot" className="w-40 pa3 ba b--green bg-lightest-blue"/>
			<br/>
			<br/>
		</div>



	);
}




export default Search; 