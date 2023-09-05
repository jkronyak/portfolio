
export type Project = { 
	title: string,
	url: string,
	description: string,
	skills: string[]
}

export const projectList: Project[] = [
	{
		title: "Gamer Spot",
		url: "https://github.com/jkronyak/gamer-spot",
		description: "A simple web application developed for SSW 590: DevOps Principles and Practices. The site allows users to search for their favorite games to view information and reviews. Users can create an account and leave their own game reviews.",
		skills: ["JavaScript", "Node.js", "HTML5", "CSS", "React", "Express", "MongoDB", "Webpack", "MaterialUI", "Docker", "GitHub Actions", "AWS" ]
	}, 
	{
		title: "Rock Buddy",
		url: "https://github.com/jkronyak/rock-buddy",
		description: "A modern web application developed for CS 554: Web Programming II. Rock Buddy is a place for rock music fans to learn more about artists and their work. The site full integrates with the Spotify API to allow music listening and playlist creation without opening Spotify. Rock Buddy also features sharing and chat features to allow rock lovers to talk with each other about their favorite music.",
		skills: ["JavaScript", "Node.js", "HTML5", "CSS", "React", "Express", "Redis", "Firebase", "MaterialUI", "Redux" ]
	}


]

