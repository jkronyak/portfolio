import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer-div'>
			<hr></hr>
			<a href='https://github.com/jkronyak'>
				<span className='hidden-span'>GitHub</span>
				<img src="./img/github-mark.png"/>
			</a>
			<a href='https://www.linkedin.com/in/jared-kronyak/'>
				<span className='hidden-span'>LinkedIn</span>
				<img src="./img/linkedin-logo.png"/>
			</a>
		</div>
	)

};

export default Footer;