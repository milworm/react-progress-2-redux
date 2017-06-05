import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import 'progress-dev/component.css'
import {
	Progress,
	reducer as reactProgressReducer,
	showProgress,
	hideProgress
} from 'progress-dev/index.jsx'
import { reducer, actions } from './reducer.jsx'

let store = createStore(
	combineReducers({
		progressRedux: reactProgressReducer,
		app: reducer
	}),
	applyMiddleware(thunk)
)

@connect(state => (state.app), actions)
class Application extends React.PureComponent {
	render () {
		return (
			<div>
				<Progress />
				<h1>Hello from react-progress-2 (redux version)</h1>
				<button onClick={this.loadUsers}>load users</button>
				<h2>Users:</h2>
				<div>
					{this.props.items.map(item => {
						return (
							<div key={item.id}>
								{item.first_name} {item.last_name}
							</div>
						)
					})}
				</div>
			</div>
		)
	}

	loadUsers = () => {
		this.props.loadUsers(1000)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById('root')
)