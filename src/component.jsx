import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

@connect(state => (state.progressRedux))
export default class Component extends React.PureComponent {
	static propTypes = {
		cls: PropTypes.string,
		style: PropTypes.object,
		state: PropTypes.string
	}

	static defaultProps = {
		cls: '',
		style: {}
	}

	count = 0
	runningTimerId = null
	hidingTimerId = null

	componentWillReceiveProps(nextProps) {
		if(nextProps.action == 'show')
			this.show()
		else if(nextProps.action == 'hide')
			this.hide()
		else if(nextProps.action == 'hideAll')
			this.hideAll()
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.action == this.props.action
	}

	render () {
		let { cls, style } = this.props

		return (
			<div className={`loader-60devs ${cls}`} style={style} data-state='hidden' ref='element'>
				<div className='loader-60devs-progress'></div>
			</div>
		)
	}

	show () {
		if(++this.count > 1)
			return 

		clearTimeout(this.hidingTimerId)

		let { element } = this.refs
		let progressEl = element.querySelector('.loader-60devs-progress')

		element.setAttribute('data-state', 'hidden')
		// the only working way to restart a transition on firefox
		progressEl.outerHTML = progressEl.outerHTML
		element.offsetHeight
		element.setAttribute('data-state', '')
		element.offsetHeight
		element.setAttribute('data-state', 'running')
	}

	hide () {
		if(--this.count > 0)
			return 

		this.refs.element.setAttribute('data-state', 'finishing')
		this.hidingTimerId = setTimeout(this.toHiddenState, 500)
	}

	hideAll () {
		this.count = 1
		this.hide()
	}

	toHiddenState = () => {
		this.refs.element.setAttribute('data-state', 'hidden')
	}

	isVisible () {
		return this.refs.element.getAttribute('data-state') != 'hidden'
	}
}