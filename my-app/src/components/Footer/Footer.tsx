import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer-div'>
			<hr></hr>
			<a href='https://github.com/jkronyak' target="_blank">
				<span className='hidden-span'>GitHub</span>
				<img src="./img/github-mark.png" alt="GitHub Logo"/>
			</a>
			<a href='https://www.linkedin.com/in/jared-kronyak/' target="_blank">
				<span className='hidden-span'>LinkedIn</span>
				<img src="./img/linkedin-logo.png" alt="LinkedIn Logo"/>
			</a>
		</div>
	)

};

export default Footer;