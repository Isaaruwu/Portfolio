import React from 'react'
const github_username = 'Isaaruwu'
const discord_usertag = 'Isaar#9003'
const discord_userid = '795096902591971338'
const email = 'ismailaarabb@gmail.com'

const projects = [
	'Isaaruwu/OrderMatchingEngine',
	'Isaaruwu/PortfolioManager',
	'Isaaruwu/Plant-e',
	'Isaaruwu/TomStock',
	'Isaaruwu/SmollBot',
]

const links = [
	{
		name: 'Linkedin',
		icon: 'fab fa-fw fa-linkedin-in',
		link: 'https://www.linkedin.com/in/ismailaarab/',
		description: 'Connect with me!',
	},
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/Isaaruwu',
		description: 'My Github profile',
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
	{
		name: 'Resume',
		icon: 'fas fa-fw fa-file',
		link: `https://drive.google.com/file/d/1mwNsluhiSdWvO8rsKlN73vLhZDWZTur7/view?usp=sharing`,
		description: 'Here\'s my resume!',
	}
]

const info = (
	<>
		<div style={{ lineHeight: '30px' }}>
			<p>Hi! 👋</p><br />
			<p>
			I'm <span className="highlighted">Ismail Aarab</span>, a Master's student at <span className="highlighted">MILA (Quebec AI Institute)</span> and a
			<span className="highlighted"> graduate with a Bachelor's degree in Software Engineering from Polytechnique Montréal</span>. 
			I’m passionate about building high-performance software and innovative solutions at the intersection of quantitative finance, data, and AI.
			</p><br />
			<p>
			I recently returned from an exchange at Korea University where I had the opportunity to deepen my expertise in Data Science and Artificial Intelligence.  
			Through multiple internships—including two at Morgan Stanley—I’ve gained real-world experience in DevOps, backend systems, and machine learning.
			</p><br />
			<p>
			My personal projects reflect this blend of interests: from a C++ order book simulator implementing advanced matching algorithms to full-stack web applications and AI tools.
			I thrive on writing clean, efficient code and solving challenging problems.
			</p>
<<<<<<< HEAD

=======
>>>>>>> 62c3141 (UPDATE)
		</div>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
