import React, { Component, RefObject, createRef } from 'react'
import commands from '../commands/commands'
import { github_username } from '../config'
import { InputManagerState } from '../typings'
import styles from './InputManager.module.scss'

class InputManager extends Component<
	{ handleExecute: (commandName: string) => void },
	InputManagerState
> {
	inputRef: RefObject<any>
	updateInputField: (value?: string) => void
	command_stack: string[]

	constructor(props: { handleExecute: (commandName: string) => void }) {
		super(props)
		this.state = {
			value: '',
			suggestedValue: '',
		}
		this.inputRef = createRef()
		this.updateInputField = (value = '') => {
			this.inputRef.current.value = value
		}
		this.command_stack = []
	}		
	render() {
		const { value } = this.state
		return (
			<div className={styles.inputWrapper}>
				<span className={styles.promptPrefix}>
					<span>{github_username}</span> ~ <span>🪴</span> <span>{'>>'}</span>
				</span>
				<form
					action="#"
					onSubmit={event => {
						event.preventDefault()
						this.setState({ value: '', suggestedValue: '' })
						this.updateInputField()
						this.props.handleExecute(value)
						this.command_stack.push(value)
					}}
					className={styles.inputForm}
				>
					<span className={styles.suggested}>
						{this.state.suggestedValue}
					</span>
					<input
						className={`${styles.input} ${
							commands.has(value.trim())
								? styles.validCommand
								: ''
						}`}
						spellCheck={false}
						placeholder="Type help for a list of commands!"
						ref={this.inputRef}
						autoFocus
						onKeyDown={event => {
							const { value, suggestedValue } = this.state
							if (
								(event.key === 'Tab' ||
									event.key === 'ArrowRight') &&
								suggestedValue
							) {
								event.preventDefault()
								const newValue = value + suggestedValue.trim()
								this.updateInputField(newValue)
								this.setState({
									value: newValue,
									suggestedValue: '',
								})
							}
							if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
								event.preventDefault();
								let index = this.command_stack.indexOf(value);
								if( value === '') {index = this.command_stack.length}
								if (event.key === 'ArrowUp') {
								  // Navigate up the command stack
								  if (index > 0) {
									index--;
								  }
								} else if (event.key === 'ArrowDown') {
								  // Navigate down the command stack
								  if (index < this.command_stack.length) {
									index++;
								  }
								}
								const newValue = this.command_stack[index] || '';
								this.updateInputField(newValue);
								this.setState({
								value: newValue,
								suggestedValue: '',
								});
							}
						}}
						onInput={event => {
							const target = event.target as HTMLInputElement

							// value is trimmed, but event.target.value isnt
							const value = target.value.trimStart().toLowerCase()

							let suggestedValue = ''
							if (value)
								for (const cmd of commands.values())
									if (cmd.name.startsWith(value)) {
										suggestedValue =
											' '.repeat(target.value.length) +
											cmd.name.substring(value.length)
										break
									}

							this.setState({
								value: value,
								suggestedValue: suggestedValue,
							})
						}}
					/>
				</form>
			</div>
		)
	}
}

export default InputManager
