import "./Home.scss"

const Home = () => {
    return (
        <div className='home-div'>
			<div className='headshot-div'>
				<img id='headshot' src="./img/square_color.jpg" alt='Headshot'></img>
			</div>
			<div className='home-text-div'>
            	<h1>
					<span>Jared Kronyak</span>
				</h1>
				<h2>
					<span>Software Engineer</span>
				</h2>
			</div>
        </div>
    )
}

export default Home;