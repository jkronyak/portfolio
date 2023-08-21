import React from 'react';




import "../Home.css"

const Home = () => {
    return (
        <div className='home-div'>
			<img id='headshot' src={"./img/square_color.jpg"} alt='Headshot'></img>
			<div id='home-text-div'>
            	<h1>Jared Kronyak</h1>
				<h2>Software Engineer</h2>
			</div>
        </div>
    )
}

export default Home;