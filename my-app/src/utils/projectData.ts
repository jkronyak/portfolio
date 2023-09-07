
export type Project = { 
	title: string,
	url: string,
	description: string,
	skills: string[]
}

export const skillList: string[] = [
	"JavaScript", "Node", "HTML5", "CSS", "React", "Express", "MongoDB", "Webpack", "MaterialUI", "Docker", "GitHub Actions", "AWS",
	"Redis", "Firebase", "Redux", "XSS", "Handlebars", "SCSS", "React Router"
]

export const projectList: Project[] = [
	{
		title: "Gamer Spot",
		url: "https://github.com/jkronyak/gamer-spot",
		description: "A web application developed for SSW 590: DevOps Principles and Practices. The site allows users to search for their favorite games to view information and reviews. Users can create an account and leave their own game reviews.",
		skills: ["JavaScript", "Node", "HTML5", "CSS", "React", "Express", "MongoDB", "Webpack", "MaterialUI", "Docker", "GitHub Actions", "AWS", "React Router" ]
	}, 
	{
		title: "Rock Buddy",
		url: "https://github.com/jkronyak/rock-buddy",
		description: "A web application developed for CS 554: Web Programming II. Rock Buddy is a place for rock music fans to learn more about artists and their work. The site full integrates with the Spotify API to allow music listening and playlist creation without opening Spotify. Rock Buddy also features sharing and chat features to allow rock lovers to talk with each other about their favorite music.",
		skills: ["JavaScript", "Node.js", "HTML5", "CSS", "React", "Express", "Redis", "Firebase", "MaterialUI", "Redux", "React Router" ]
	},
	{
		title: "C'est La Vie", 
		url: "https://github.com/jkronyak/cest-la-vie",
		description: "A web application developed for CS 546: Web Programming I. C'est La Vie is a fictional hair salon located within Hoboken, NJ with a response website for appointmnet bookings and hairdresser reviews.",
		skills: ["JavaScript", "TypeScript", "HTML5", "CSS", "Express", "MongoDB", "Handlebars", "Docker", "XSS"]
	},
	{
		title: "Portfolio",
		url: "https://github.com/jkronyak/portfolio",
		description: "A website showcasing my professional and academic experience. Includes a list of my projects, courses, experience, and my resume.",
		skills: ["TypeScript", "HTML5", "SCSS", "React", "React Router" ]
	}


]

