import React from 'react'
const github_username = 'Isaaruwu'
const discord_usertag = 'Isaar#9003'
const discord_userid = '795096902591971338'
const email = 'ismailaarabb@gmail.com'

const projects = [
	'Isaaruwu/Rewind',
	'Isaaruwu/.dotfiles',
	'Isaaruwu/Plant-e',
	'Isaaruwu/TomStock',
	'Isaaruwu/Template-Generator',
	'Isaaruwu/PolyAI-EmailSender',
	'Isaaruwu/SmollBot',
	// 'Isaaruwu/EstateGuardian', private repo
	// 'Isaaruwu/StockAI2', private repo
]

const links = [
	{
		name: 'Linkedin',
		icon: 'fab fa-fw fa-linkedin-in',
		link: 'https://www.linkedin.com/in/ismail-aarab-25b2061b0/',
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
		link: `https://drive.google.com/file/d/1eEWXEWpFSDxCSrqxCIBdei3GF4LMFVyG/view?usp=sharing`,
		description: 'Here\'s my resume!',
	}
]

const info = (
	<>
		<div style={{ lineHeight: '30px' }}>
			<p>Hi!👋</p><br></br>
			<p>
				I'm <span className="highlighted">Ismail Aarab</span>,  soon to be a 
				<span className="highlighted"> graduate with a Bachelor's
				degree in Software Engineering from Polytechnique Montréal</span>. With a strong foundation in 
				software development and a passion for continuous learning, I thrive on creating innovative solutions to complex problems.
			</p>
			<br></br>
			<p>
			Throughout my academic journey, I have specialized in automating tasks through scripting 
			and have developed a keen interest in Data Engineering and Artificial Intelligence. My projects, 
			both in school and during my spare time, have allowed me to gain hands-on experience in these fields. 
			Additionally, I enjoy designing and building full-stack web applications, 
			constantly pushing the boundaries of what I can achieve.
			</p><br></br>
			<p>
				Here's a list of some of the technologies I've been working with recently 
				(it's only from my public repos, so it's not exhaustive 😉 ):
			</p> <br></br>
			<img alt="stats" style={{
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
							}} 
  				src="https://github-readme-stats.vercel.app/api/top-langs/?username=isaaruwu&show_icons=true&theme=dark&bg_color=0A0A0A&locale=en"/>
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
