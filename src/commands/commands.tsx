import React from 'react'
import styles from './commands.module.scss'
import { links, info } from '../config'
import { Commands, Command } from '../typings'
import ListElement from '../ListElement/ListElement'

const rawCommands: Command[] = [
	{
		name: 'help',
		icon: 'fas fa-fw fa-question-circle',
		description: 'List available commands',
		execute(app) {
			const { commands } = app.state
			return (
				<>
					Available commands:
					{[...commands.values()].map(
						({ icon, name, description }, key) => (
							<ListElement
								key={key}
								icon={icon}
								name={name}
								description={description}
								help
							/>
						)
					)}
				</>
			)
		},
	},
	{
		name: 'about',
		icon: 'fas fa-fw fa-info-circle',
		description: 'Show about me',
		execute(app) {
			const { userDataLoaded, userData } = app.state
			if (!userDataLoaded)
				return <>User data could not be fetched</>
			const { avatar_url, login} = userData
			return (
				<div className={styles.infoWrapper}>
					<div className={styles.infoInner}>
						<div className={styles.title}>
							<img
								src={avatar_url}
								className={styles.avatar}
								alt="GitHub avatar"
							/>
							<div className={styles.header}>
								<strong>Ismail Aarab</strong>
								<p className="muted">@{login}</p>
							</div>
						</div>	
						<div className={styles.content}>
							<div className={styles.info}>{info} </div>
						</div>
					</div>
				</div>
			)
		},
	},
	{
		name: 'projects',
		icon: 'fas fa-fw fa-tools',
		description: 'List of my major projects',
		execute(app) {
			const { projectDataLoaded, projectData } = app.state
			if (!projectDataLoaded)
				return <>Project data could not be fetched</>
			return (
				<>
					{projectData.map(
						({ name, html_url, description }: any, key: number) => (
							<ListElement
								key={key}
								icon={'fab fa-fw fa-github'}
								name={name}
								link={html_url}
								description={description}
							/>
						)
					)}
				</>
			)
		},
	},
	{
		name: 'links',
		icon: 'fas fa-fw fa-link',
		description: 'Display social links',
		execute() {
			return (
				<>
					{links.map(({ icon, name, link, description }, key) => (
						<ListElement
							key={key}
							icon={icon}
							name={name}
							link={link}
							description={description}
						/>
					))}
				</>
			)
		},
	},
	{
		name: 'clear',
		icon: 'fas fa-fw fa-eraser',
		description: 'Clear terminal screen',
		execute(app) {
			app.setState({
				...app.state,
				record: [],
			})
		},
	},
]
const commands: Commands = new Map(rawCommands.map(cmd => [cmd.name, cmd]))

export default commands
