import React from 'react'
import 'tachyons'


const Card = ({id,name,email}) =>{


	return(

		<div className = "tc bg-light-blue dib br3 pa14 ma3 bw2 shadow-4 grow">
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div style={{backgroundColor :"pink"}}>
			 	<h2>{name}</h2>
			 	<p>{email}</p>
			 </div>
		</div>



	);
}

export default Card;