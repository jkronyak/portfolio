import { Project, Experience, Course } from './types';

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
		skills: ["JavaScript", "Node", "HTML5", "CSS", "React", "Express", "Redis", "Firebase", "MaterialUI", "Redux", "React Router" ]
	},
	{
		title: "C'est La Vie", 
		url: "https://github.com/jkronyak/cest-la-vie",
		description: "A web application developed for CS 546: Web Programming I. C'est La Vie is a fictional hair salon located within Hoboken, NJ with a response website for appointmnet bookings and hairdresser reviews.",
		skills: ["JavaScript", "TypeScript","Node", "HTML5", "CSS", "Express", "MongoDB", "Handlebars", "Docker", "XSS"]
	},
	{
		title: "Portfolio",
		url: "https://github.com/jkronyak/portfolio",
		description: "A website showcasing my professional and academic experience. Includes some information about myself as well as my projects, experience, courses, and resume.",
		skills: ["TypeScript", "Node", "HTML5", "SCSS", "React", "React Router" ]
	},
	{
		title: "Bobby B Discord Bot",
		url: "https://github.com/jkronyak/bobbybdiscordpy",
		description: "A Discord Bot which responds to users with a random quote from Game of Thrones' Robert Baratheon. It also has experimental music functionality.",
		skills: ["Python", "Discord API"]
	}
];

export const experienceList: Experience[] = [ 
	{
		title: "Course Assistant",
		employer: "Stevens Insitute of Technology",
		startDate: "August 2022",
		endDate: "July 2022",
		location: "Hoboken, NJ",
		responsibilities: [
			"Assist students with subjects and assignments of the graduate-level Web Programming I course, including Node.js, MongoDB, Express, jQuery, and HTML/CSS.",
			"Conduct weekly office hours and grading of student homework assignments and projects.",
			"Monitor emails and a Slack workspace at all times to answer student questions."
		]
	},
	{
		title: "Software Engineer Intern",
		employer: "Infosys",
		startDate: "May 2022",
		endDate: "July 2022",
		location: "Remote",
		responsibilities: [
			"Conduct requirements gathering and application design for an internal personnel management system.",
			"Utilize React to implement a modern, easy-to-use user interface for viewing employee profiles and managing project assignments.",
			"Use Java and Spring Boot to create a backend web server which interfaces with a MySQL database to store user and project information."
		]
	},
	{
		title: "Customer Service Associate",
		employer: "Stop and Shop",
		startDate: "March 2020",
		endDate: "August 2021",
		location: "Toms River, NJ",
		responsibilities: [
			"Provide and maintain a positive and helpful customer experience, including processing refunds, tender exchanges, and price adjustments through the store's point-of-sale system.",
			"Successfully conduct the training of new hires and current employees in a variety of front-end positions.",
			"Operate as a key-holding member of the store's Front-End Department to authorize certain point-of-sale system functions."
		]
	},
]

export const courseList: Course[] = [ 
	{
		code: "CS 284",
		title: "Data Structures"
	},
	{
		code: "CS 385",
		title: "Algorithms"
	},
	{
		code: "CS 383",
		title: "Computer Organization and Programming"
	},
	{
		code: "CS 392",
		title: "Systems Programming"
	},
	{
		code: "CS 334",
		title: "Theory of Computation"
	},
	{
		code: "CS 396",
		title: "Security Privacy and Society"
	},
	{
		code: "CS 496",
		title: "Principles of Programming Languages"
	},
	{
		code: "CS 442",
		title: "Database Management Systems"
	},
	{
		code: "CS 424",
		title: "Senior Design II"
	},
	{
		code: "CS 423",
		title: "Senior Design I"
	},
	{
		code: "CS 541",
		title: "Artificial Intelligence"
	},
	{
		code: "CS 583",
		title: "Deep Learning"
	},
		{
		code: "CS 546",
		title: "Web Programming I"
	},
	{
		code: "CS 554",
		title: "Web Programming II"
	},
	{
		code: "CS 545",
		title: "Human Computer Interaction"
	},
	{
		code: "CS 555",
		title: "Agile Methods for Software Development"
	},
	{
		code: "CS 590",
		title: "DevOps Principles and Practices"
	}
]

const uniqueSkills: string[] = [];

projectList.forEach((proj) => { 
	proj.skills.forEach((skill) => { 
		if(!uniqueSkills.includes(skill)) { 
			uniqueSkills.push(skill);
		}
	})
});

export const skillList: string[] = uniqueSkills;

